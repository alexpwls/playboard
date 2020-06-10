import { setupBoard } from './js/soundboard'
import { setupSoundEffects } from './js/sound-effects'

import './styles/main.scss'

import logoIcon from './media/logo.png';

var logoImg = document.querySelector('.logo');
logoImg.src = logoIcon;

export {
    setupBoard,
    setupSoundEffects
}

document.addEventListener("DOMContentLoaded", function() {
    setupBoard();
});