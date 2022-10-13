import app from '../../firebase/config-firebase.js';
import { errorMessages, fieldVerification } from '../../firebase/erros.js';

import {
  getAuth,
  createUserWithEmailAndPassword
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';

export default () => {
  const container = document.createElement('div');

  const template = `
        <section class="container-signup">
            <figure class="img-logo">
                <img class= "logo" id= "logo" src="./img/logo.png" alt="logo">
            </figure>
            <h1>Cadastro</h1>
            <form class="form-signup">
              <label for="insert-name" class="registration-label" id="label-name">Nome:</label>
              <input class="input-name" id="insert-name" placeholder="Insira seu nome"/>
              
              <label for="insert-username" class="registration-label">Nome de usuário:</label>
              <input class="input-username" id="insert-username" placeholder="Insira seu @username"/>

              <label for="insert-email" class="registration-label">E-mail:</label>
              <input type="email" class="input-email" id="insert-email" placeholder="Insira seu e-mail"/>

              <label for="insert-password" class="registration-label">Senha:</label>
              <input type="password" class="input-password" id="insert-password" placeholder="Crie sua senha" />
              
              <p class="error-output"></p>
              <p class="error-output2"></p>

              <input type="submit" class="btn" id="btn-cadastrar" value="Cadastrar"/>

              <button class="btn" id="btn-clean">Limpar campos</button>            
              
            </form>
            
              <button class="btn" id="btn-initial">Retornar ao Login</button>
            
        </section>`;
  container.innerHTML = template;

  // Eventos para capturar inputs:
  const inputName = container.querySelector('#insert-name');
  const inputUsername = container.querySelector('#insert-username');
  const email = container.querySelector('#insert-email');
  const password = container.querySelector('#insert-password');
  const form = container.querySelector('.form-signup');
  const errorOutput = container.querySelector('.error-output');
  const otherErrorOutput = container.querySelector('.error-output2');
  const btnReturn = container.querySelector('#btn-initial');

  btnReturn.addEventListener('click', () => window.location.replace('#'));

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        window.location.hash = '#homepage';
        console.log(user);
        // ...
      })
      .catch((error) => {
        errorOutput.innerHTML = errorMessages(error);
        otherErrorOutput.innerHTML = fieldVerification(
          inputName.value,
          inputUsername.value,
          email.value,
          password.value
        );

        // ..
      });
    // signInWithEmailAndPassword(auth, email.value, password.value)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //   });

    //testando:
    console.log('submit');
    console.log(email.value);
    console.log(password.value);
    console.log(inputName.value);
    console.log(inputUsername.value);
  });

  return container;
};

