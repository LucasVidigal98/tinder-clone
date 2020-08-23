import firebase from 'firebase';

const firebaseConfig = {
   // YOUR CONFIGURATION
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;
