/* eslint-disable import/no-unresolved */
export { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';

export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';

export {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';
