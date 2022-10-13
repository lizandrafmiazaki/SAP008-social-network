import app from '../../config-firebase.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';

export default () => {
  const container = document.createElement('div');

  const template = `
    <img class= "logo" id= "logo" src="./img/logo.png" alt="logo"> 
    <section class="container-login">
    
      <h1>Bem-vinda ao Code Girls</h1>
          <form class="form-login">
            <label for="input-email" class="login-label" id="label-email">E-mail:</label>
            <input type="email" class="input-area" id="input-email" placeholder="Insira seu e-mail"/>

            <label for="input-password" class="login-label" id="label-password">Senha:</label>
            <input type="password" class="input-area" id="input-password" placeholder="Insira sua senha"/>
            <br>
            <button type="submit" class="btn" id="btn-login">Entrar</button>
          </form>
          
          <hr>

          <button class="btn" id="btn-login-google">Login com Google</button>

          <hr>
          
          <a href= "/#signup"><button class="btn" id="btn-register">Clique aqui para se cadastrar</button></a> 

    </section>
    `;container.innerHTML = template;

    // Eventos para capturar inputs:
  const email = container.querySelector('#input-email');
  const password = container.querySelector('#input-password');
  const form = container.querySelector('.form-login');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        window.location.hash = '#homepage';
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    // testando:
    console.log('submit');
    console.log(email.value);
    console.log(password.value);
  });

  return container;
};
