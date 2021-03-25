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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
