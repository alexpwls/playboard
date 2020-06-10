function updateNav(library) {
    const navSection = document.querySelector('.dropdown-content');
    const sound = Client.setupSound();
    
    // Update navigation
    for (let item of sound) {
        navSection.insertAdjacentHTML('beforeend', navHTML(item.id, item.library));
    }
}

function navHTML(item, library) {
    const html = `<a href="#" onclick="Client.setupBoard('${item}')">${library}</a>`;
    return html;
};

export { updateNav };