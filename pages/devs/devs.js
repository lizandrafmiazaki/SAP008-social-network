import { logout } from '../../lib/firebase-auth.js';

export default () => {
  const container = document.createElement('div');

  const template = `
  <section class="container-home">
  <header>
  <img class= "logo" id= "logo-post" src="./img/logo.png" alt="logo">
  </header>
  <body class="body-devs">
    <div class="profile-card">
      <div class="img">
        <img id="img-profile" src="./img/amanda-polari.jpg" alt="">
      </div>
      <div class="caption">
        <h3>Amanda Polari</h3>
        <p>Web Developer</p>
        <div class="social-links">
          <a href="https://github.com/amandapolari" target="_blank">
          <img id="github" src="./img/github.png"></a>
          <a href="https://www.linkedin.com/in/amandapolari/" target="_blank">
          <img id="linkedin" src="./img/linkedIn.png"></a>
        </div>
      </div>
    </div>
    <div class="profile-card">
      <div class="img">
        <img id="img-profile" src="./img/lizandra-miazaki.jpg" alt="">
      </div>
      <div class="caption">
        <h3>Lizandra Miazaki</h3>
        <p>Web Developer</p>
        <div class="social-links">
          <a href="https://github.com/lizandrafmiazaki" target="_blank">
          <img id="github" src="./img/github.png"></a>
          <a href="https://www.linkedin.com/in/lizandramiazaki/" target="_blank">
          <img id="linkedin" src="./img/linkedIn.png"></a>
        </div>
      </div>
    </div>
  <body>
  <footer class="footer-nav">
    <nav>
      <ul>
        <li>
          <a href="#post">
            <img class="icon" id="icon-home" src="./img/icon-homepage.png" alt="icone de homepage">
          </a>
        </li>
        <li>
          <a href="#add">
            <img class="icon" id="icon-add" src="./img/icon-add-post.png" alt="icone de adicionar post">
          </a>
        </li>
        <li>
          <a href="#devs">
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
  `;
  container.innerHTML = template;
  const btnLogout = container.querySelector('#icon-exit');
  btnLogout.addEventListener('click', (e) => {
    e.preventDefault();
    logout();
    window.location.hash = ' ';
  });
  return container;
};
