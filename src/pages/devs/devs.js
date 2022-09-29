export default () => {
    const container = document.createElement('div');
  
    const template = `
      <section class="container-devs">
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
        
         <h1>Desenvoveldoras</h1>

          <figure class="dev-one">
          <img class="image-dev" id="image" src="./img/user.png" alt="imagem da desenvolvedora">
          <h2>Nome da desenvolvedora 1</h2>
          <p>Redes socias</p>
          </figure>

          <figure class="dev-two"
          <img class="image-dev" id="image" src="./img/user.png" alt="imagem da desenvolvedora">
          <h2>Nome da desenvolvedora 2</h2>
          <p>Redes socias</p>
          </figure>

          <figure class="dev-three"
          <img class="image-dev" id="image" src="./img/user.png" alt="imagem da desenvolvedora">
          <h2>Nome da desenvolvedora 3</h2>
          <p>Redes socias</p>
          </figure>
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
  