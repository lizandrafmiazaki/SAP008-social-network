//importação do firebase:
import "./config-firebase.js"
import { myFunction } from './lib/index.js';

myFunction();

import login from "./pages/login/login.js";

const main = document.querySelector("#root");

const init = () => {
    window.addEventListener ("hashchange", () => {
        main.innerHTML = "";
        switch (window.location.hash){
            case "#login":
                main.appendChild (login());
                break;
            case "#adotar":
                main.appendChild (adotar());
                break;
            case "#informar":
                main.appendChild (informar());
                break;
            case "#postar":
                main.appendChild (postar());
                break;
            default:
                main.appendChild (login());
        }
    })
}

window.addEventListener("load", () => {
    main.appendChild(login());
    init();
})
