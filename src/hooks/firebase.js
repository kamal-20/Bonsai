import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyARp4gANir88Vgi6iEqOAGLqNqEVfcZzUc",
    authDomain: "bonsai-4e628.firebaseapp.com",
    databaseURL: "https://bonsai-4e628.firebaseio.com",
    projectId: "bonsai-4e628",
    storageBucket: "bonsai-4e628.appspot.com",
    messagingSenderId: "113742784895",
    appId: "1:113742784895:web:44e8a4cdf3d39b0c00924a",
    measurementId: "G-BXRLEHMVPM"
  
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db= firebase.firestore;

export { firebase,db };


