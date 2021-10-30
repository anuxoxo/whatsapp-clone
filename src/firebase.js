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

// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAK39PChknr98FyZ635-w7JvoXMqe8jNJE",
//     authDomain: "whatsapp-clone-e6ab9.firebaseapp.com",
//     projectId: "whatsapp-clone-e6ab9",
//     storageBucket: "whatsapp-clone-e6ab9.appspot.com",
//     messagingSenderId: "197785975163",
//     appId: "1:197785975163:web:39043260c8bbe5ab9565de",
//     measurementId: "G-428XWT0Q75"
// };

// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
// const auth = getAuth();
// const provider = new GoogleAuthProvider();

// // async function getCities(db) {
// //     const citiesCol = collection(db, 'cities');
// //     const citySnapshot = await getDocs(citiesCol);
// //     const cityList = citySnapshot.docs.map(doc => doc.data());
// //     return cityList;
// // }

// export { auth, provider };
// export default db;
