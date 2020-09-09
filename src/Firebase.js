import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB_agirFnT_hBmSCLDDGngrR8MXYu06nE8",
    authDomain: "clone-1f1db.firebaseapp.com",
    databaseURL: "https://clone-1f1db.firebaseio.com",
    projectId: "clone-1f1db",
    storageBucket: "clone-1f1db.appspot.com",
    messagingSenderId: "186553435111",
    appId: "1:186553435111:web:f8f5c84fdbd1e689e1f342",
    measurementId: "G-2LNLBXM70S"
});

const db = firebase.firestore();
const auth = firebase.auth();

export { db,auth };