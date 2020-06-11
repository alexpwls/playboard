function setupBoard(activeSound) {
    const boardSection = document.querySelector('.board');
    const sound = Client.setupSound();

    boardSection.innerHTML = "";

    // Setup sound
    for (let item of sound[activeSound].sounds) {
        boardSection.insertAdjacentHTML('beforeend', itemHTML(item, sound[activeSound].slug));
    }
    updateUI(sound[activeSound].library);
};

function itemHTML(item, slug) {
    const html = `<div class="item">
                    <audio id="${item}">
                        <source src="/dist/media/sound/sound-effects/${slug}/${item}.mp3" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                    <button id="button-${item}"onclick="Client.playAudio('${item}')" type="button">${item}</button>
                </div>`;
    return html;
};

function updateUI(library) {
    document.getElementById('library').innerHTML = library;
}

export { setupBoard };