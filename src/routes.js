import './lib/config-firebase.js';
import { myFunction } from './lib/index.js';
import login from './pages/login/login.js';
import signup from './pages/signup/signup.js';
import add from './pages/add/add.js';
import post from './pages/post/post.js';
import devs from './pages/devs/devs.js';

myFunction();
//------------------------

const routes = document.querySelector('#root');

const init = () => {
  window.addEventListener('hashchange', () => {
    routes.innerHTML = '';
    switch (window.location.hash) {
      case ' ':
        routes.appendChild(login());
        break;
      case '#signup':
        routes.appendChild(signup());
        break;
      case '#add':
        routes.appendChild(add());
        break;
      case '#post':
        routes.appendChild(post());
        break;
      case '#devs':
        routes.appendChild(devs());
        break;
      default:
        routes.innerHTML = '';
        routes.appendChild(login());
    }
  });
};

window.addEventListener('load', () => {
  routes.appendChild(login());
  init();
});
