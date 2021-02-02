// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC0v2E4j8UJ0ZbFZXMpe93w2Zxp6bcWqhw",
  authDomain: "projecta-31369.firebaseapp.com",
  projectId: "projecta-31369",
  storageBucket: "projecta-31369.appspot.com",
  messagingSenderId: "165102247581",
  appId: "1:165102247581:web:c87a8675e656d37385be74",
  measurementId: "G-Y415628PJK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };