import { setupBoard } from './js/soundboard'
import { setupSound } from './js/sound'
import { playAudio } from './js/play-audio'
import { updateNav } from './js/updateNav'

import './styles/main.scss'

import logoIcon from './media/logo.png';

var logoImg = document.querySelector('.logo');
logoImg.src = logoIcon;

export {
    setupBoard,
    setupSound,
    playAudio,
    updateNav
}

document.addEventListener("DOMContentLoaded", function() {
    setupBoard('0');
    updateNav();
});