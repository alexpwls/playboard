import { helloWorld } from './js/hello'

import './styles/main.scss'

import logoIcon from './media/logo.png';

var logoImg = document.querySelector('.logo');
logoImg.src = logoIcon;

export {
    helloWorld
}