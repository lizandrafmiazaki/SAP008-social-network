/* eslint-disable import/no-unresolved */
import { initializeApp } from './exports.js';
// import { initializeApp, getFirestore } from './exports.js';
const firebaseConfig = {
  apiKey: 'AIzaSyB-5Rzb3sQFADnF3ScoTuxqRzkNCTgoSOw',
  authDomain: 'miacolhe-sn.firebaseapp.com',
  projectId: 'miacolhe-sn',
  storageBucket: 'miacolhe-sn.appspot.com',
  messagingSenderId: '548732506486',
  appId: '1:548732506486:web:c61f3e325cc630a019aa57',
};

export const app = initializeApp(firebaseConfig);
// export const firestore = getFirestore(app); 
// firestore = db na documentação do firebase.
