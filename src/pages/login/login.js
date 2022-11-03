import { loginWithUser, loginWithGoogle } from '../../lib/firebase-auth.js';
import { loginValidation } from '../../lib/validation.js';
import { errorMessages } from '../../lib/erros.js';

export default () => {
  const container = document.createElement('div');

  const template = `
    <img class= "logo" id= "logo" src="./img/logo.png" alt="logo"> 
    <section class="container-login">
    
      <h1>Bem-vinda ao Code Girls!</h1>
          <form class="form-login">
            <label for="input-email" class="login-label" id="label-email">E-mail:</label>
            <input type="email" class="input-area" id="input-email" placeholder="Insira seu e-mail"/>

            <label for="input-password" class="login-label" id="label-password">Senha:</label>
            <input type="password" class="input-area" id="input-password" placeholder="Insira sua senha"/>
            
            <p class="error-output"></p>
            <p class="error-output2"></p>

            <button type="submit" class="btn" id="btn-login">Entrar</button>
          </form>
          <hr>
          <button class="btn" id="btn-login-google">Login com Google</button>
          <hr>
          <a href= "/#signup"><button class="btn" id="btn-register">Clique aqui para se cadastrar</button></a> 

          <a href= "/#post"><button>ATALHO</button></a> 
          <a href= "/#add"><button>ATALHO 2</button></a> 

    </section>
    `;
  container.innerHTML = template;

  // Eventos para capturar inputs:
  const email = container.querySelector('#input-email');
  const password = container.querySelector('#input-password');
  const form = container.querySelector('.form-login');
  const errorOutput = container.querySelector('.error-output');
  const otherErrorOutput = container.querySelector('.error-output2');
  const btnLoginGoogle = container.querySelector('#btn-login-google');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    otherErrorOutput.innerHTML = '';
    errorOutput.innerHTML = '';

    const validationLogin = loginValidation(email.value, password.value);

    if (validationLogin) {
      otherErrorOutput.innerHTML = validationLogin;
    } else {
      //=> ENTRADA DA NOVA FUNÇÃO DE NOVO USUÁRIO
      loginWithUser(email.value, password.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          window.location.hash = '#post';
        })
        .catch((error) => {
          errorOutput.innerHTML = errorMessages(error);
        });
    }
    //testando:
    //console.log('submit');
    //console.log(email.value);
    //console.log(password.value);
  });

  
  btnLoginGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    loginWithGoogle()
      .then(() => {
        window.location.hash = '#post';
      })
      .catch((error) => {
        errorOutput.innerHTML = errorMessages(error);
      });
  });

  return container;
};

