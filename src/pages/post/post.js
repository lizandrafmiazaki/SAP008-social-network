/* eslint-disable indent */
import { getPost, editPost, deletePost, likePost } from '../../lib/firestore.js';
import { getAuth } from '../../lib/exports.js';
import { app } from '../../lib/config-firebase.js';

const auth = getAuth(app);
console.log (auth);

// import { auth } from '../../lib/firebase-auth.js';
// import { auth, logout } from '../../lib/firebase-auth.js';

export default () => {
const container = document.createElement('div');
const printPost = async () => {
  const dataPost = await getPost();
  const postTemplate = dataPost.map((post) => `
    <section class="container-post">
    <header>
      <img class= "logo" id= "logo" src="./img/logo.png" alt="logo">
    </header>
    <div class="container">
      <figure class="">
        <img class="photo-user" id="photo-user" src="./img/user.png" alt="imagem do usuário">
      </figure>      
        <p class="username">${post.name}</p>     
      
      <textarea class="postTxt txtArea" data-post="${post.id}" id="text-post" disabled>${post.text}</textarea>

      <div id="bts-edition">
        <button class="btn-post edit" data-id-post-edit="${post.id}" id="btnEdit" type="button">Editar</button>
        <button class="btn-post save" data-save="${post.id}"id="btnSave" type="button">Salvar</button>  
        <button data-id-post-delete="${post.id}" class="btn-post delete" id="btnDelete">Excluir</button>
      </div>

      <div data-confirmation-options="${post.id}" class="confimation-delete hide">
        <p class="confirmation-text">Você deseja excluir essa publicação permanentemente?</p>
        <button class="btn-post confirm" id="btnConfirmDelete" data-confirmation-delete="${post.id}" type="button">Sim</button>
        <button class="btn-post confirm" data-decline-delete="${post.id}" type="button">Não</button>
      </div>
      
      <button id="btnLike" class="btn-like like " data-count-likes="${post.like.length}" data-like-btn="${post.id}" type="button">
      <img class="heart-icon" ${post.like.includes(auth.currentUser.uid) ? 'src="img/full-heart.png"' : 'src="img/empty-heart.png"'} alt="purple-heart"> 
      </button> 
    </div>
    <footer>
        <nav>
          <ul>
            <li>
              <a href="/#homepage">
                <img class="icon" id="icon-home" src="./img/icon-homepage.png" alt="icone de homepage">
              </a>
            </li>
            <li>
              <a href="/#add">
                <img class="icon" id="icon-add" src="./img/icon-add-post.png" alt="icone de adicionar post">
              </a>
            </li>
            <li>
              <a href="/#devs">
                <img class="icon" id="icon-info" src="./img/icon-info.png" alt="icone de informações">
              </a>
            </li>
            <li>
              <img class="icon" id="icon-exit" src="./img/icon-exit.png" alt="icone de sair">
            </li>
            <li>
              <a href="/#inform">
                <img class="icon"id="icon-settings" src="./img/icon-settings.png" alt="icone de configurações">
              </a>
            </li>
          </ul>
        </nav>
        </footer>
      </section>
  `).join('');
  container.innerHTML = postTemplate;
  
  // TENTANDO - INICIO
  const divEdition = container.querySelector('.bts-edition');
  
  addEventListener("load", (e) => {
    e.preventDefault();
    if(post.author === auth.currentUser.uid) {
      divEdition.style.display = "block"
    } else {
      divEdition.style.display = "none"
    }
  });

  
    // TENTANDO - FIM


  // => Inicio ---------------------

  const btnsEdit = Array.from(container.querySelectorAll('#btnEdit'));
    const btnsDelete = Array.from(container.querySelectorAll('#btnDelete'));
    const btnsLike = Array.from(container.querySelectorAll('#btnLike'));

    btnsEdit.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const postToBeEdited = e.currentTarget.dataset.idPostEdit;
        console.log(e);
        console.log(postToBeEdited);
        const txtPost = container.querySelector(`[data-post="${postToBeEdited}"]`);
        const dataSave = container.querySelector(`[data-save="${postToBeEdited}"]`);
        const btnEdit = container.querySelector(`[data-id-post-edit="${postToBeEdited}"]`);
        const btnDelete = container.querySelector(`[data-id-post-delete="${postToBeEdited}"]`);

        txtPost.removeAttribute('disabled');
        dataSave.classList.remove('hide');
        btnEdit.classList.add('hide');
        btnDelete.classList.add('hide');

        dataSave.addEventListener('click', async () => {
          await editPost(postToBeEdited, txtPost.value);
          txtPost.setAttribute('disabled', '');
          dataSave.classList.add('hide');
          btnEdit.classList.remove('hide');
          btnDelete.classList.remove('hide');
        });
      });
    });

    btnsDelete.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const postToBeDeleted = e.currentTarget.dataset.idPostDelete;
        console.log(postToBeDeleted);
        const btnDelete = container.querySelector(`[data-id-post-delete="${postToBeDeleted}"]`);
        const confirmationOptions = container.querySelector(`[data-confirmation-options="${postToBeDeleted}"]`);
        const btnConfirmDelete = container.querySelector(`[data-confirmation-delete="${postToBeDeleted}"]`);
        const btnDeclineDelete = container.querySelector(`[data-decline-delete="${postToBeDeleted}"]`);
        const btnEdit = container.querySelector(`[data-id-post-edit="${postToBeDeleted}"]`);

        btnEdit.classList.add('hide');
        btnDelete.classList.add('hide');
        confirmationOptions.classList.remove('hide');

        btnConfirmDelete.addEventListener('click', async () => {
          await deletePost(postToBeDeleted);
          window.location.hash = '#post';
        });

        btnDeclineDelete.addEventListener('click', () => {
          confirmationOptions.classList.add('hide');
          btnDelete.classList.remove('hide');
          btnEdit.classList.remove('hide');
        });
      });
    });

    btnsLike.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const elemento = e.currentTarget;
        const postLikedId = elemento.dataset.likeBtn;
        const user = auth.currentUser.uid;
        const img = e.target;

        likePost(postLikedId, user)
          .then((resultado) => {
            if (resultado.liked === true) {
              img.setAttribute('src', './img/full-heart.png');
            } else {
              img.setAttribute('src', './img/empty-heart.png');
            }

            elemento.dataset.countLikes = resultado.count;
          });
      });
    });
  }
  // => Fim ---------------------

  // => Botão de sair:
  // const btnLogout = container.querySelector('#icon-exit');

  // btnLogout.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   logout();
  //   window.location.hash = ' ';
  // });

  printPost();
  return container;
}