export default () => {
  const container = document.createElement('div');

  const template = `
        <section class="container-signup">
            <figure class="img-logo">
                <img class= "logo" id= "logo" src="./img/logo.png" alt="logo">
            </figure>
            <h1>Cadastro</h1>
            <section class="form-signup">
                <div class="name-lastname">
                    <label for="insert-name" class="registration-label" id="label-name">Nome completo:</label>
                    <input class="input-name-lastname" id="insert-name" placeholder="Insira seu nome e sobrenome"/>
                    
                    <label for="insert-username" class="registration-label">Nome de usuário:</label>
                    <input class="input-username" id="insert-username" placeholder="Insira seu @username"/>

                    <label for="insert-email" class="registration-label">E-mail:</label>
                    <input class="input-email" id="insert-email" placeholder="Insira seu e-mail"/>

                    <label for="insert-password" class="registration-label">Senha:</label>
                    <input class="input-password" id="insert-password" placeholder="Crie sua senha" />
                    
                    <label for="insert-confirm" class="registration-label">Senha:</label>
                    <input class="input-confirmpassword" id="insert-confirm" placeholder="Confirme sua senha" />
            </section>
                <div class="btn-signup">

                    <button class="btn" id="btn-clear">Limpar Campos</button>

                    <a href= "/#homepage"><button class="btn" id="btn-signup">Cadastrar</button></a>

                    <a href= "/#"><button class="btn" id="btn-initial">Retornar ao Login</button></a>
                </div>
        </section>`;
  container.innerHTML = template;
  return container;
};
