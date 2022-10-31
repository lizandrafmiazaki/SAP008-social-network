import { getAuth, collection, addDoc } from './exports.js';
//import { getFirestore, collection, addDoc, doc, getDoc, getDocs, updateDoc, deletDoc, } from './exports.js';

import { app, firestore } from './config-firebase.js';

export const createPost = async (contentPost) => {
    const auth = getAuth(app);

    try {
      const docRef = await addDoc(collection(firestore, 'post'), {
        name: auth.currentUser.displayName,
        text: contentPost,
      });
      console.log("Document written with ID: ", docRef.id);
      console.log(post.text);
        const content = `O conteúdo da página é: ${post.text}`
      return content;
    } catch (error) {
      return error;
    }
  };
