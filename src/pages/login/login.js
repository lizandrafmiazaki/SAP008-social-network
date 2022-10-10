export default () => {
  const container = document.createElement('div');

  const template = `
    <img class= "logo" id= "logo" src="./img/logo.png" alt="logo"> 
    <section class="container-login">
      <h1>Bem-vinda ao Code Girls</h1>
          <div>
          <label class="label" id="label" for="input-name">Nome:</label>
            <input name="" id="input-name" placeholder="Insira seu e-mail" class="input"></input>
            <label class="label" id="label" for="input-email">E-mail:</label>
            <input name="" id="input-email" placeholder="Insira sua senha" class="input"></input>
          </div>
          <a href= "/#homepage"><button class="btn" id="btn-login">Entrar</button></a>
          <div class="lines"></div>
          <button class="btn" id="btn-login-google">Login com Google</button>
          <div class="lines"></div>
          <a href= "/#signup"><button class="btn" id="btn-register">Clique aqui para se cadastrar</button></a> 
    </section>
    `;container.innerHTML = template;

  return container;
};
