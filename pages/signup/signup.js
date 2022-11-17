import { createNewUser } from '../../lib/firebase-auth.js';
import { errorMessages } from '../../lib/erros.js';
import { signupValidation } from '../../lib/validation.js';

export default () => {
  const container = document.createElement('div');

  const template = `
    <img class= "logo" id= "img-logo-login" src="./img/logo.png" alt="logo">
    <h1>Bem-vinda ao Code Girls!</h1>
    <section class="container-user">
      <h2 class="subtitle">Cadrastre-se</h2>
      <form class="form-signup">
        <label for="insert-name" class="label-for-input" id="label-name">Nome:*</label>
        <input class="input-area" id="insert-name" placeholder="Insira seu nome"/>
        
        <label for="insert-username" class="label-for-input">Nome de usuário:*</label>
        <input class="input-area" id="insert-username" placeholder="Insira seu @username"/>

        <label for="insert-email" class="label-for-input">E-mail:*</label>
        <input type="email" class="input-area" id="insert-email" placeholder="Insira seu e-mail"/>

        <label for="insert-password" class="label-for-input">Senha:*</label>
        <input type="password" class="input-area" id="insert-password" placeholder="Crie sua senha" />
        
        <p class="txt-error" id="error-output"></p>
        <p class="txt-error" id="error-output2"></p>

        <input type="submit" class="btn" id="btn-signup" value="Cadastrar"/>
        <input type="reset" class="btn" id="btn-clean" value="Limpar campos"/>
        <button class="btn" id="btn-initial">Retornar ao Login</button>
      </form>
    </section>
    <footer>
      <p class="footer-devs">Desenvolvido por <a class="link-linkedin" href="https://www.linkedin.com/in/amandapolari/" target="_blank"
      >Amanda Polari</a> e <a class="link-linkedin"
      href="https://www.linkedin.com/in/lizandra-miazaki-59b097227/"
      target="_blank"
      >Lizandra Miazaki</a></p>
    </footer>
    `;
  container.innerHTML = template;

  // Eventos para capturar inputs:
  const inputName = container.querySelector('#insert-name');
  const inputUsername = container.querySelector('#insert-username');
  const email = container.querySelector('#insert-email');
  const password = container.querySelector('#insert-password');
  const form = container.querySelector('.form-signup');
  const errorOutput = container.querySelector('#error-output');
  const otherErrorOutput = container.querySelector('#error-output2');
  const btnReturn = container.querySelector('#btn-initial');

  btnReturn.addEventListener('click', () => window.location.replace('#'));

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    otherErrorOutput.innerHTML = '';
    errorOutput.innerHTML = '';

    const validationError = signupValidation(
      inputName.value,
      inputUsername.value,
      email.value,
      password.value,
    );

    if (validationError) {
      otherErrorOutput.innerHTML = validationError;
    } else {
      createNewUser(email.value, password.value)
        .then(() => {
          // .then((userCredential) => {
          // const user = userCredential.user;
          window.location.hash = '#post';
          // console.log(user);
        })
        .catch((error) => {
          errorOutput.innerHTML = errorMessages(error);
        });
    }

    // testando:
    // console.log('submit');
    // console.log(email.value);
    // console.log(password.value);
    // console.log(inputName.value);
    // console.log(inputUsername.value);
  });

  return container;
};
