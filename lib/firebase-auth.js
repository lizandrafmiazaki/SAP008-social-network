import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from './exports.js';

import { app } from './config-firebase.js';

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);

export function loginWithUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function loginWithGoogle() {
  return signInWithPopup(auth, provider);
}

export async function createNewUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export async function logout() {
  return signOut(auth);
}

// export function getUser(){
//   return auth.currentUser
// }
