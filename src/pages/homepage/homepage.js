export default () => {
  const container = document.createElement('div');

  const template = `
    <section class="container-home">
      <header>
        <nav>
          <ul>
            <li>
              <a href="/#">Login</a>
            </li>
            <!-- adotar -> adopt -->
            <li>
              <a href="/#homepage">Quero adotar</a>
            </li>
            <!-- informar -> inform -->
            <li>
              <a href="/#inform">Quero informações</a>
            </li>
            <!-- postar -> post -->
            <li>
              <a href="/#post">Quero postar</a>
            </li>
          </ul>
        </nav>
      </header>
      
      <body>
        <figure class="">
          <img class="user" id="user" src="./img/user.png" alt="imagem do usuário">
        </figure>
        <p>@username</p>
        <figure class="">
          <img class="img-content" id="" src="./img/caixa.png" alt="imagem de conteúdo">
        </figure>
        <p>like ❤</p>
      </body>
      
      <footer>
        <nav>
          <ul>
            <li>
              <a href="/#devs">Devs</a>
            </li>
            <li>
              <a href="/#homepage">Início</a>
            </li>
            <button>Topo</button>
            <li>
              <a href="/#">Sair</a>
            </li>
          </ul>
        </nav>
      </footer>
    </section>`;
  container.innerHTML = template;
  return container;
};
