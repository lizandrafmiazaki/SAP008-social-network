/* eslint-disable indent */
import { getPost, editPost } from '../../lib/firestore.js';
import { auth } from '../../lib/firebase-auth.js';
// import { auth, logout } from '../../lib/firebase-auth.js';

export default () => {
  const container = document.createElement('div');
  const printPost = async () => {
    const dataPost = await getPost();
    const postTemplate = dataPost.map ((post) => `
      <section class="container-post">
        <header>
          <img class= "logo" id= "logo" src="./img/logo.png" alt="logo">
        </header>
        <div class="container">
          <figure class="">
            <img class="photo-user" id="photo-user" src="./img/user.png" alt="imagem do usuário">
          </figure>
          <div class="div-photo-user">
            <img src="../../img/user.png" class="photo-user" alt="foto de usuário">
            <p class="username">${post.name}</p>
          </div>

          <textarea class="area-post" data-post="${post.id}" id="text-post" disabled>${post.text}
          </textarea>

          <div ${post.author === auth.currentUser.uid ? 'class="post-btn" ' : 'class="post-btn hide"'}>

 

            <button class="btn-edits edit" data-id-post-edit="${post.id}" id="btnEdit" type="button">Editar</button>

            <button class="btn-edits save hide" data-save="${post.id}"id="btnSave" type="button">Salvar</button>  
            
            <button data-id-post-delete="${post.id}" class="btn-edits delete" id="btnDelete">Excluir</button>
          </div>
           
          <div data-confirmation-options="${post.id}" class="confimation-delete hide">
            <p class="confirmation-text">Você deseja excluir essa publicação permanentemente?</p>
            <button class="btn-post confirm" id="btnConfirmDelete" data-confirmation-delete="${post.id}" type="button">Sim</button>
            <button class="btn-post confirm" data-decline-delete="${post.id}" type="button">Não</button>
          </div>
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
  };

  // => Botão de sair:
  // const btnLogout = container.querySelector('#icon-exit');

  // btnLogout.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   logout();
  //   window.location.hash = ' ';
  // });

  printPost();
  return container;
};