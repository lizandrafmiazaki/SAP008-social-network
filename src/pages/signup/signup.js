import app from "../../config-firebase.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
export default () => {
  const container = document.createElement("div");

  const template = `
        <section class="container-signup">
            <figure class="img-logo">
                <img class= "logo" id= "logo" src="./img/logo.png" alt="logo">
            </figure>
            <h1>Cadastro</h1>
            <form class="form-signup">
                <div class="name-lastname">
                    <label for="insert-name" class="registration-label" id="label-name">Nome completo:</label>
                    <input class="input-name-lastname" id="insert-name" placeholder="Insira seu nome e sobrenome"/>
                    
                    <label for="insert-username" class="registration-label">Nome de usuário:</label>
                    <input class="input-username" id="insert-username" placeholder="Insira seu @username"/>

                    <label for="insert-email" class="registration-label">E-mail:</label>
                    <input type="email" class="input-email" id="insert-email" placeholder="Insira seu e-mail"/>

                    <label for="insert-password" class="registration-label">Senha:</label>
                    <input type="password" class="input-password" id="insert-password" placeholder="Crie sua senha" />
                    
                    <label for="insert-confirm" class="registration-label">Senha:</label>
                    <input type="password" class="input-confirmpassword" id="insert-confirm" placeholder="Confirme sua senha" />

                    
                    <input type="submit" class="btn-signup">Cadastrar</input>
                    <button class="btn-clear">Limpar todos os campos</button>
            </form>
                <div class="btn-signup">

                    <a href= "/#"><button class="btn" id="btn-initial">Retornar ao Login</button></a>
                </div>
        </section>`;
  container.innerHTML = template;

  // Eventos para capturar inputs:
  const email = container.querySelector("#insert-email");
  const password = container.querySelector("#insert-password");
  const form = container.querySelector(".form-signup");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    console.log("submit");
    console.log(email.value);
    console.log(password.value);
  });

  return container;
};
