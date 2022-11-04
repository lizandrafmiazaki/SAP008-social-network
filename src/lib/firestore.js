import {
  getAuth, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, getDoc,
} from './exports.js';

import { app, firestore } from './config-firebase.js';

// Criar post:
export const createPost = async (contentPost) => {
  const auth = getAuth(app);

  try {
    const docRef = await addDoc(collection(firestore, 'post'), {
      name: auth.currentUser.displayName,
      author: auth.currentUser.uid,
      text: contentPost,
      like: [],
    });
    // console.log('Document written with ID: ', docRef.id);
    // console.log(post.text);
    // const content = `O conteúdo da página é: ${post.text}`;
    return docRef;
  } catch (error) {
    return error;
  }
};

// Pegar post
export const getPost = async () => {
  try {
    const querySnapshot = await getDocs(collection(firestore, 'post'));
    const postArray = [];
    querySnapshot.forEach((post) => {
      postArray.push({ ...post.data(), id: post.id });
    });

    return postArray;
  } catch (error) {
    return error;
  }
};

// editar o post
export const editPost = async (userId, contentPost) => {
  const editedPost = doc(firestore, 'post', userId);

  await updateDoc(editedPost, {
    text: contentPost,
  });
};

// Editar daqui pra baixo
export const deletePost = async (userId) => {
  try {
    const deletedPost = doc(firestore, 'post', userId);
    await deleteDoc(deletedPost);

    return deletedPost.id;
  } catch (error) {
    return error;
  }
};

export const getPostById = async (postId) => {
  const docRef = doc(firestore, 'post', postId);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const likePost = async (postId, userId) => {
  const post = await getPostById(postId);
  let likes = post.like;
  const likeVerification = !likes.includes(userId);

  if (likeVerification) {
    likes.push(userId);
  } else {
    likes = likes.filter((id) => id !== userId);
  }

  await updateDoc(doc(firestore, 'post', postId), {
    like: likes,
  });

  return { liked: likeVerification, count: likes.length };
};
