import 'regenerator-runtime';
import '../styles/main.scss';
import swRegister from './utils/swRegister';
import App from './view/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#content'),
  loader: document.querySelector('.loader-container'),
  backToTopButton: document.querySelector('#backToTopButton'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('DOMContentLoaded', () => {
  swRegister();
  app.renderPage();
});
