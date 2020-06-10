import { setupBoard } from './js/soundboard'
import { setupSoundEffects } from './js/sound-effects'
import { playAudio } from './js/play-audio'

import './styles/main.scss'

import logoIcon from './media/logo.png';

var logoImg = document.querySelector('.logo');
logoImg.src = logoIcon;

export {
    setupBoard,
    setupSoundEffects,
    playAudio
}

document.addEventListener("DOMContentLoaded", function() {
    setupBoard();
});