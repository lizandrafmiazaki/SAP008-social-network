import {
  getPost, editPost, deletePost, likePost,
} from '../../lib/firestore.js';
import { getAuth } from '../../lib/exports.js';
import { app } from '../../lib/config-firebase.js';
import { logout } from '../../lib/firebase-auth.js';

const auth = getAuth(app);

// import { auth } from '../../lib/firebase-auth.js';
// import { auth, logout } from '../../lib/firebase-auth.js';

export default () => {
  const container = document.createElement('div');

  const printPost = async () => {
    const dataPost = await getPost();
    const postTemplate = dataPost.map((post) => `
  <header>
    <img class= "logo" id="logo-post" src="./img/logo.png" alt="logo">
    <div class="space"></div>
  </header>
    <section class="container-post">

    <div class="container" id="all-content">  
    <p class="username">${post.name}</p>     
  
      <textarea class="postTxt txtArea" data-post="${post.id}" id="text-post" disabled>${post.text}</textarea>

      <span class="save-alert hide" data-save-alert="${post.id}"></span>

      <div ${post.author === auth.currentUser.uid ? 'class="btns-post-container" ' : 'class="btns-post-container hide"'}>          
        <button class="btn-post edit" data-id-post-edit="${post.id}" id="btnEdit" type="button">Editar</button>
        <button class="btn-post save hide" data-save="${post.id}"id="btnSave" type="button">Salvar</button>  
        <button data-id-post-delete="${post.id}" class="btn-post delete" id="btnDelete">Excluir</button>
      </div>            
      <div data-confirmation-options="${post.id}" class="confimation-delete hide">
        <span class="confirmation-text">Você deseja excluir essa publicação permanentemente?</span>
        <button class="btn-post confirm" id="btnConfirmDelete" data-confirmation-delete="${post.id}" type="button">Sim</button>
        <button class="btn-post confirm" data-decline-delete="${post.id}" type="button">Não</button>
      </div>
      <button id="btnLike" class="btn-like like " data-count-likes="${post.like.length}" data-like-btn="${post.id}" type="button">
      <img class="heart-icon" ${post.like.includes(auth.currentUser.uid) ? 'src="img/full-heart.png"' : 'src="img/empty-heart.png"'} alt="purple-heart"> 
      </button> 
    </form>
    
    <img class="icon" id="to-top" src="./img/to-top.png" alt="ícone de voltar ao topo">

    <footer class="footer-nav">
        <nav>
          <ul>
            <li>
              <a href="/#post">
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
          </ul>
        </nav>
        </footer>
      </section>
  `).join('');
    container.innerHTML = postTemplate;

    const btnsEdit = Array.from(container.querySelectorAll('#btnEdit'));
    const btnsDelete = Array.from(container.querySelectorAll('#btnDelete'));
    const btnsLike = Array.from(container.querySelectorAll('#btnLike'));
    const btnTop = Array.from(container.querySelectorAll('#to-top'));
    const btnLogout = Array.from(container.querySelectorAll('#icon-exit'));

    btnsEdit.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const postToBeEdited = e.currentTarget.dataset.idPostEdit;
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
          printPost();
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

    // Botão topo
    btnTop.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      })
    });
    
      // //  => Botão de sair:
      btnLogout.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        logout();
        window.location.hash = ' ';
      })
    });
    
  };
  printPost();
  return container;
};
