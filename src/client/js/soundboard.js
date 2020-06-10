function setupBoard() {
    const boardSection = document.querySelector('.board');
    const soundEffects = Client.setupSoundEffects();
    for (let item of soundEffects) {
        boardSection.insertAdjacentHTML('beforeend', itemHTML(item));
    }
};

function itemHTML(item) {
    const html = `<div class="item">
                    <p>${item}</p>
                </div>`;
    return html;
};

export { setupBoard };