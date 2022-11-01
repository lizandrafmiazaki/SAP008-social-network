/* eslint-disable indent */
import { createPost, getPost } from '../../lib/firestore.js';
// import { getAuth } from "../../lib/exports.js";
import { auth, logout } from '../../lib/firebase-auth.js';

export default () => {
  const container = document.createElement('div');

  const template = `    <section class="container-post">
    <header>
    <img class= "logo" id= "logo" src="./img/logo.png" alt="logo">
    </header>
    <div class="container">
      <figure class="">
        <img class="photo-user" id="photo-user" src="./img/user.png" alt="imagem do usuário">
      </figure>
      <p class="name-user">@username</p>
      <p class="control-text">PÁGINA PARA ADICIONAR POST</p>
      <form class="form-text">
        <input type="text" class="typing-area">
        <button class="btn" id="btn-post">
          Postar
        </button>
      </form>
      <!-- <p class="output-post">SAÍDA</p> --> 
      <p class="output-test">TESTANDO</p>

          <img class="icon" id="to-top" src="./img/to-top.png" alt="icone de voltar ao topo">
    </div>

    <section class="container-post">
    </section>

    <footer>
      <nav>
        <ul>
          <li>
            <a href="/#homepage">
              <img class="icon" id="icon-home" src="./img/icon-homepage.png" alt="icone de homepage">
            </a>
          </li>
          <li>
            <a href="/#post">
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
  </section>`;
  container.innerHTML = template;

  const printPost = async () => {
    const arrayPost = await getPost();
    const postTemplate = arrayPost
      .map(
        (post) => `
      <div class="post">
        <div class="div-photo-user">
          <img src="../../img/user.png" class="photo-user" alt="foto de usuário">
          <p class="username">${post.name}</p>
        </div>        
        <textarea
         class="area-post"
          data-post="${post.id}" id="text-post" disabled>${post.text}
        </textarea>

        <div ${post.author === auth.currentUser.uid
            ? 'class="post-btn" ' : 'class="post-btn hide"'}>

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
    `,
      )
      .join('');
    container.querySelector('.container-post').innerHTML = postTemplate;
  };

  printPost();

  // => Criação e post e saidas
  const postBtn = container.querySelector('#btn-post');
  const contentPost = container.querySelector('.typing-area');
  const outputTest = container.querySelector('.output-test');

  // const outputPost = container.querySelector('.output-post');

  postBtn.addEventListener('click', (e) => {
    e.preventDefault();
    createPost(contentPost.value);
    // eslint-disable-next-line no-return-assign
    return (outputTest.innerHTML = contentPost.value);
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
