import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAeNomMF8h1kE2Ps7klTpngdh1gvkWu0nQ',
  authDomain: 'tetalovers-5fe62.firebaseapp.com',
  projectId: 'tetalovers-5fe62',
  storageBucket: 'tetalovers-5fe62.appspot.com',
  messagingSenderId: '317887558659',
  appId: '1:317887558659:web:7ac7befb90b16be2abca36',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
