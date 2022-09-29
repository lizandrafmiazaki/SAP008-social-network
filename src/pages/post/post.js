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
            <form>
                <figure class="">
                    <img class="user" id="user" src="./img/user1.png" alt="imagem do usuário">
                </figure>
                <p>@username</p>

                <div class="">
                    <p>Clique aqui para inserir sua foto</p>
                    <img class="img-add" id="" src="./img/add-foto" alt="imagem a ser adicionada pelo usuário">
                </div>

                <textarea>
                    Clique aqui para inserir seu texto
                </textarea>

                <select class="select" id="select" >
                    <optgroup name="" label="Você Deseja:">
                    <option value="">Informar</option>
                    <option value="">Doar</option>
                </select>

                <button type="submit">Publicar</button>
            </form>
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
  