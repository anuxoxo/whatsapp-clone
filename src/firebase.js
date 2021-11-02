import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAK39PChknr98FyZ635-w7JvoXMqe8jNJE",
    authDomain: "whatsapp-clone-e6ab9.firebaseapp.com",
    projectId: "whatsapp-clone-e6ab9",
    storageBucket: "whatsapp-clone-e6ab9.appspot.com",
    messagingSenderId: "197785975163",
    appId: "1:197785975163:web:39043260c8bbe5ab9565de",
    measurementId: "G-428XWT0Q75"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

