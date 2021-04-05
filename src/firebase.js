import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAK-BBH5JYhPL3MRJVx5hHcsUUnTBi0CE4",
    authDomain: "fun-foods-app.firebaseapp.com",
    projectId: "fun-foods-app",
    storageBucket: "fun-foods-app.appspot.com",
    messagingSenderId: "913376098538",
    appId: "1:913376098538:web:d44458c11f306fde38ff93",
    measurementId: "G-9JK8KQYKFZ"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;