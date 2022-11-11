/* eslint-disable indent */
import { createPost } from '../../lib/firestore.js';
// import { getAuth } from "../../lib/exports.js";

import { auth, logout } from '../../lib/firebase-auth.js';

// import { logout } from '../../lib/firebase-auth.js';

export default () => {
  const container = document.createElement('div');

  const template = `
    <section class="container-post">
      <header>
        <img class= "logo" id= "logo" src="./img/logo.png" alt="logo">
      </header>
      <div class="container">
        <figure class="">
          <img class="photo-user" id="photo-user" src="./img/user.png" alt="imagem do usuário">
        </figure>
        <p class="name-user">${auth.currentUser.displayName}</p>
        <p class="control-text">Digite abaixo o que deseja postar</p>
        <form class="form-text">
          <input type="text" class="typing-area">
          <button class="btn" id="btn-post">
            Postar
          </button>
        </form>
        <p class="output-alert"></p>
            <img class="icon" id="to-top" src="./img/to-top.png" alt="icone de voltar ao topo">
      </div>

    <footer>
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
  </section>`;
  container.innerHTML = template;

  // console.log(auth.currentUser.displayName);

  // => Criação e post e saidas
  const postBtn = container.querySelector('#btn-post');
  const contentPost = container.querySelector('.typing-area');
  const outputAlert = container.querySelector('.output-alert');

  // const outputPost = container.querySelector('.output-post');

  postBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (contentPost.value === '') {
      outputAlert.innerHTML = 'Por favor, escreva seu post';
    } else {
      createPost(contentPost.value);
      window.location.hash = '#post';
    }
  });

  // => Botão de sair:
  const btnLogout = container.querySelector('#icon-exit');
  btnLogout.addEventListener('click', (e) => {
    e.preventDefault();
    logout();
    window.location.hash = ' ';
  });
  return container;
};
