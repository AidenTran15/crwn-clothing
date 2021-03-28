import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('czEvhGJwTt5hQoywj7TC').collection('cartItems').doc('7HKsCJYSdj6xdUMlMJed');
firestore.doc('/users/czEvhGJwTt5hQoywj7TC/cartItems/7HKsCJYSdj6xdUMlMJed');
firestore.collection('/users/czEvhGJwTt5hQoywj7TC/cartItems');