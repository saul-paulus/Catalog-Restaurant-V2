/* eslint-disable no-unused-vars */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('#tombol-menu'),
  menu: document.querySelector('#navigation-menu'),
  content: document.querySelector('#container-content'),
});
