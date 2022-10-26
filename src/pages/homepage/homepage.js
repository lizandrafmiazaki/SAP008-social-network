import { logout } from '../../lib/firebase-auth.js';

export default () => {
  const container = document.createElement('div');

  const template = `
    <section class="container-home">
      <header>
      <img class= "logo" id= "logo" src="./img/logo.png" alt="logo">
      </header>
      <div>
        <figure class="">
          <img class="photo-user" id="photo-user" src="./img/user.png" alt="imagem do usuário">
        </figure>
        <p class="name-user">@username</p>
        <p class="control-text">HOMEPAGE</p>
            <img class="icon" id="to-top" src="./img/to-top.png" alt="icone de voltar ao topo">
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
                <img class="icon" id="icon-settings" src="./img/icon-settings.png" alt="icone de configurações">
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </section>`;
  container.innerHTML = template;

  const btnLogout = container.querySelector('#icon-exit')
  

  btnLogout.addEventListener('click', (e) => {
    e.preventDefault();
    logout();
    window.location.hash = ' ';
  });

  return container;
};
