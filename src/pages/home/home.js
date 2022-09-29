export default () => {
    const container = document.createElement("div");

    const template = 
    `
    <header>
    <nav>
      <ul>
        <li>
          <a href="/#login">Login</a>
        </li>
        <!-- adotar -> adopt -->
        <li>
          <a href="/#adopt">Quero adotar</a>
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
    
  
  <footer>
  <nav>
    <ul>
      <li>
        <a href="/#devs">Devs</a>
      </li>
      <li>
        <a href="/#home">Início</a>
      </li>
      <button>Topo</button>
      <li>
        <a href="/#exit">Sair</a>
      </li>
    </ul>
  </nav>
</footer>`;

    container.innerHTML = template;

    return container;
}