import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDuRAXf3Y2DugBJi2OO_z5NiFEDTCPovks",
    authDomain: "tinder-clone-bc59a.firebaseapp.com",
    databaseURL: "https://tinder-clone-bc59a.firebaseio.com",
    projectId: "tinder-clone-bc59a",
    storageBucket: "tinder-clone-bc59a.appspot.com",
    messagingSenderId: "706621558996",
    appId: "1:706621558996:web:5c5c9e102aa11a3e152b41",
    measurementId: "G-PRTBE067GG",
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;

// untuk menjalankan fire base :
// npm i firebase