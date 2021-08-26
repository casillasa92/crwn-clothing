import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBQxKds65pj3_fGgceh4P35JmmIFz21FaI",
  authDomain: "crwn-db-41946.firebaseapp.com",
  projectId: "crwn-db-41946",
  storageBucket: "crwn-db-41946.appspot.com",
  messagingSenderId: "410191016588",
  appId: "1:410191016588:web:44b8e89e201b2374c001a9",
  measurementId: "G-3PXG37BDR0",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
