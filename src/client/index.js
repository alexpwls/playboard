import { setupBoard } from './js/soundboard'
import { setupMovieQuotes } from './js/movie-quotes'

import './styles/main.scss'

import logoIcon from './media/logo.png';

var logoImg = document.querySelector('.logo');
logoImg.src = logoIcon;

export {
    setupBoard,
    setupMovieQuotes
}

setupBoard()