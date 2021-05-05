import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC2vW0r3VfrbISBtx2Fs6t5jE3daIXfh4c",
  authDomain: "whatsapp-clone-2bdc9.firebaseapp.com",
  projectId: "whatsapp-clone-2bdc9",
  storageBucket: "whatsapp-clone-2bdc9.appspot.com",
  messagingSenderId: "860116489807",
  appId: "1:860116489807:web:0e9dfecea9c8007e673c3a",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
