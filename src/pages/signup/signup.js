export default () => {
  const container = document.createElement('div');

  const template = `
        <section class="container-signup">
            <figure class="img-logo">
                <img class= "logo" id= "logo" src="./img/logo.png" alt="logo">
            </figure>
            <h1>Miacolhe</h1>
            <form class="form-signup">
                <h2>Cadastro</h2>
                <div class="name-lastname">
                    <label for="insert-name" class="label">Nome completo</label>
                    <input class="input-name-lastname" id="insert-name" placeholder="Insira seu nome e sobrenome"/>
                    
                    <label for="insert-username" class="label">Nome de usuário</label>
                    <input class="input-username" id="insert-username" placeholder="Insira seu @username"/>

                    <label for="insert-email" class="label">E-mail</label>
                    <input class="input-email" id="insert-email" placeholder="Insira seu e-mail"/>

                    <label for="insert-password">Senha</label>
                    <input class="input-password" id="insert-password" placeholder="Crie sua senha" />
                    
                    <label for="insert-confirm">Senha</label>
                    <input class="input-confirmpassword" id="insert-confirm" placeholder="Confirme sua senha" />
                </div>
            </form>
                <div class="btn-signup">
                <a href= "/#homepage"><button class="btn-signup">Cadastrar</button></a>
                    <button class="btn-clear">Limpar todos os campos</button>
                    <a href= "/#"><button class="btn-initial">Início</button></a>
                </div>
        </section>`;
  container.innerHTML = template;
  return container;
};
