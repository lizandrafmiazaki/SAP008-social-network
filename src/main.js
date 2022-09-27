//importação do firebase:
import "./config-firebase.js"
import { myFunction } from './lib/index.js';

myFunction();

import login from "./pages/login/login.js";

const main = document.querySelector("#root");

window.addEventListener("load", () => {
    main.appendChild(login());
})
