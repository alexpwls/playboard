const boardSection = document.querySelector('.board');


function setupBoard() {
    let movieQuotes = [1, 2, 3, 4, 5, 6, 7, 8];
    // Client.setupMovieQuotes();
    for (i of movieQuotes) {
        boardSection.insertAdjacentHTML('beforeend', itemHTML(i));
        console.log(i);
    }
    console.log("test");
};

function itemHTML(i) {
    const html = `<div class="item">
                    <p>${i}</p>
                </div>`;
    return html;
}

export { setupBoard };