import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDNw_XL3GmVfvCVaBr0jR7Cp86aC0Uo8Ic",
  authDomain: "react-project-7fe0a.firebaseapp.com",
  databaseURL: "https://react-project-7fe0a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-project-7fe0a",
  storageBucket: "react-project-7fe0a.appspot.com",
  messagingSenderId: "706276440031",
  appId: "1:706276440031:web:158893058654e1e7d8b66a",
  measurementId: "G-BWL4XG75D0"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
