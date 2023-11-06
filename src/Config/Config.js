import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAUNR05am1qni4dmv7Y0Gd3SIjgEm86Zqc",
  authDomain: "e-commerce-fe468.firebaseapp.com",
  projectId: "e-commerce-fe468",
  storageBucket: "e-commerce-fe468.appspot.com",
  messagingSenderId: "185073744988",
  appId: "1:185073744988:web:285552b744522466f4ba99",
  measurementId: "G-MZ9EH9D9N6"
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }