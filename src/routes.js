//FIREBASE:
import "./config-firebase.js"
import { myFunction } from './lib/index.js';

myFunction();
//------------------------

import login from "./pages/login/login.js";
import signup from "./pages/signup/signup.js";
import homepage from "./pages/homepage/homepage.js";
import inform from "./pages/inform/inform.js";
import post from "./pages/post/post.js";
import devs from "./pages/devs/devs.js";


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
      case "#homepage":
        routes.appendChild(homepage());
        break;
      case "#inform":
        routes.appendChild(inform());
        break;
      case "#post":
        routes.appendChild(post());
        break;
      case "#devs":
        routes.appendChild(devs());
        break;
      default:
        routes.innerHTML = "";
        routes.appendChild(login());
    }
  });
};

window.addEventListener("load", () => {
  routes.appendChild(login());
  init();
});
