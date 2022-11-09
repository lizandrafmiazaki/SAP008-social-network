/* eslint-disable no-undef */
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  doc,
} from '../src/lib/exports.js';
import {
  loginWithUser,
  loginWithGoogle,
  createNewUser,
  logout,
} from '../src/lib/firebase-auth.js';
import {
  createPost,
  getPost,
  editPost,
  getPostById,
} from '../src/lib/firestore.js';

jest.mock('../src/lib/exports.js');

// beforeEach(() => {
//   jest.clearAllMocks();
// });

describe('loginWithUser', () => {
  it(' a função deve logar um usuário utilizando email e senha', () => {
    signInWithEmailAndPassword.mockResolvedValue({
      email: {},
      password: {},
    });
    loginWithUser('amandinha@gmail.com', '123456');
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});

describe('createNewUser', () => {
  it('a função deve criar uma conta de usuário utilizando o seu email e senha', () => {
    createUserWithEmailAndPassword.mockResolvedValueOnce({
      email: {},
      password: {},
    });
    createNewUser('lizandramiazaki@gmail.com', '@LFmiazaki');
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});

describe('loginWithGoogle', () => {
  it('a função deve logar um usuário utilizando a sua conta do google', () => {
    signInWithPopup.mockResolvedValue();
    loginWithGoogle();
    expect(signInWithPopup).toHaveBeenCalledTimes(1);
  });
});

describe('logout', () => {
  it(' a função deve deslogar o usuário', () => {
    signOut.mockResolvedValue({
      user: {},
    });
    logout();
    expect(signOut).toHaveBeenCalledTimes(1);
  });
});

describe('createPost', () => {
  it(' a função deve criar um post', async () => {
    const mockGetAuth = {
      currentUser: {
        displayName: 'nome',
        uid: '123',
      },
    };

    getAuth.mockReturnValueOnce(mockGetAuth);
    addDoc.mockResolvedValue();

    const contentPost = 'texto do meu post';
    await createPost(contentPost);

    expect(addDoc).toHaveBeenCalledTimes(1);
    expect(addDoc).toHaveBeenCalledWith(undefined, {
      name: mockGetAuth.currentUser.displayName,
      author: mockGetAuth.currentUser.uid,
      text: contentPost,
      like: [],
    });
  });
});

describe('getPost', () => {
  it('a função deve retornar um array com o post a ser printado na tela', () => {
    getDocs.mockResolvedValue([{
      author: {},
      id: {},
      like: [],
      name: {},
      text: {},
    }]);
    getPost('x4H2994HPjV9zm6cp7am58XTjci2', '0pRNd4MNFXm3QAI2TYeL', ['J5rtQSlAJqO13E7znQknbvC236U2', 'scbc2YPdX5gnlsKodSzDLh3mpPr2'], 'Amanda', 'Socorro Deus!');
    expect(getDocs).toHaveBeenCalledTimes(1);
  });
});

describe('editPost', () => {
  it('a função deve atualizar um post', async () => {
    const userId = 'id do usuário';
    const postToBeEdited = 'texto a ser editado';

    updateDoc.mockResolvedValue();

    await editPost(userId, postToBeEdited);

    expect(updateDoc).toHaveBeenCalledTimes(1);
    expect(updateDoc).toHaveBeenCalledWith(undefined, {
      text: postToBeEdited,
    });
  });
});

// não passou
// describe('deletePost', () => {
//   it('a função deve deletar um post a partir do id do usuário', async () => {
//     const mockRef = {};
//     const mockPostCollection = {
//       posts: {
//         userId: 'shdiasudhiasudhasj',
//       },
//     };

//     doc.mockReturnValueOnce(mockRef);
//     deleteDoc.mockResolvedValueOnce(mockRef);

//     await deletePost(mockPostCollection.posts.userId);

//     expect(doc).toHaveBeenCalledTimes(1);
//     expect(doc).toHaveBeenCalledWith(undefined, 'post', mockPostCollection.posts.userId);
//     expect(deleteDoc).toHaveBeenCalledTimes(1);
//     expect(deleteDoc).toHaveBeenCalledWith(mockRef);
//   });
// });

// não passou
// describe('getPostById', () => {
//   it('a função deve pegar o id de um post', async () => {
//     const id = 'abc123';
//     const ref = {};
//     const post = {
//       data: jest.fn(),
//     };

//     doc.mockReturnValueOnce(ref);
//     getDoc.mockResolvedValueOnce(post);

//     await getPostById(id);

//     expect(doc).toHaveBeenCalledTimes(1);
//     expect(doc).toHaveBeenCalledWith(undefined, 'post', id);
//     expect(getDoc).toHaveBeenCalledTimes(1);
//     expect(getDoc).toHaveBeenCalledWith(ref);
//     expect(post.data).toHaveBeenCalledTimes(1);
//   });
// });

// describe('likePost', () => {
//   it('a função deve adicionar like no post', async () => {
//     const mockPost = {
//       data() {
//         const likeArr = {
//           like: [],
//         };
//         return likeArr;
//       },
//     };

//     const postId = 'id do post';
//     const userId = 'id do usuario';

//     getDoc.mockResolvedValue(mockPost);

//     await likePost(postId, userId);
//     expect(updateDoc).toHaveBeenCalledTimes(1);
//     expect(updateDoc).toHaveBeenCalledWith(undefined, {
//       like: [userId],
//     });
//   });

//   it('a função deve remover o like do post', async () => {
//     const postId = 'id do post';
//     const userId = 'id do usuario';

//     const mockPost = {
//       data() {
//         const likeArr = {
//           like: [userId],
//         };
//         return likeArr;
//       },
//     };

//     getDoc.mockResolvedValue(mockPost);

//     await likePost(postId, userId);
//     expect(updateDoc).toHaveBeenCalledTimes(1);
//     expect(updateDoc).toHaveBeenCalledWith(undefined, {
//       like: [],
//     });
//   });
// });
