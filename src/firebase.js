import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6o5kPHO1zYIh6XPitDtK_IHFb6a4F2fU",
  authDomain: "twitter-clone-6d82a.firebaseapp.com",
  databaseURL: "https://twitter-clone-6d82a.firebaseio.com",
  projectId: "twitter-clone-6d82a",
  storageBucket: "twitter-clone-6d82a.appspot.com",
  messagingSenderId: "453965179800",
  appId: "1:453965179800:web:302575dbb90eed2fa659ed",
  measurementId: "G-N9VHVMSNKM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
