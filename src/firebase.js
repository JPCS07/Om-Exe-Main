import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    // Your firebase credentials
    apiKey: "AIzaSyAiPiKOtaak-x0-w0Yh1_cKKV4xo_7V9xw",
    authDomain: "om-executive-1ae73.firebaseapp.com",
    projectId: "om-executive-1ae73",
    storageBucket: "om-executive-1ae73.appspot.com",
    messagingSenderId: "237440064102",
    appId: "1:237440064102:web:8b52d3bb93241f1d97eba7",
    measurementId: "G-VJ5W208B3V"
});

var db = firebaseApp.firestore();

export { db };