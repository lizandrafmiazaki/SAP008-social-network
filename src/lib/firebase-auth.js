import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from './exports.js';

import { app } from './config-firebase.js';

const auth = getAuth(app);