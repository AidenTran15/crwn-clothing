import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA5cRP5oX3y5keTDv6n1S6hA3xrML7sAUQ",
    authDomain: "crwn-db-5aaa3.firebaseapp.com",
    projectId: "crwn-db-5aaa3",
    storageBucket: "crwn-db-5aaa3.appspot.com",
    messagingSenderId: "808428382294",
    appId: "1:808428382294:web:e2f781721a1712b831b3f7",
    measurementId: "G-WSFTWVGV7R"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if (!snapShot.exists) {
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
