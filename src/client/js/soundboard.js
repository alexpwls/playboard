function setupBoard() {
    const boardSection = document.querySelector('.board');
    const soundEffects = Client.setupSoundEffects();
    for (let item of soundEffects) {
        boardSection.insertAdjacentHTML('beforeend', itemHTML(item));
    }
};

function itemHTML(item) {
    const html = `<div class="item">
                    <audio id="${item}">
                        <source src="/dist/media/sound/sound-effects/${item}.mp3" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                    <button onclick="Client.playAudio('${item}')" type="button">${item}</button>
                </div>`;
    return html;
};

export { setupBoard };