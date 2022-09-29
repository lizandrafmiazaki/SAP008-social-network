//FIREBASE:
import "./config-firebase.js"
import { myFunction } from './lib/index.js';

myFunction();
//------------------------

import login from "./pages/login/login.js";
import signup from "./pages/signup/signup.js";

const routes = document.querySelector("#root");

const init = () => {
  window.addEventListener("hashchange", () => {
    routes.innerHTML = "";
    switch (window.location.hash) {
      case " ":
        routes.appendChild(login());
        break;
      case "#signup":
        routes.appendChild(signup());
        break;
      default:
        routes.appendChild(login());
    }
  });
};

window.addEventListener("load", () => {
  routes.appendChild(login());
  init();
});
