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
        <button>Contrate-me</button>
        <div class="social-links">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
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
        <button>Contrate-me</button>
        <div class="social-links">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
        </div>
      </div>
    </div>
  <body>
  <footer class="footer-nav">
    <nav>
      <ul>
        <li>
          <a href="/#post">
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
          <a href="/#">
          <img class="icon" id="icon-exit" src="./img/icon-exit.png" alt="icone de sair">
          </a>
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
  `;
  container.innerHTML = template;
  return container;
};
