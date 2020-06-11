function playAudio(item) {
    let audio = document.getElementById(item);
    let button = "button-" + item;
    let buttonElement = document.getElementById(button);

    if (audio.duration > 0 && !audio.paused) {
        audio.load();
        buttonElement.innerHTML = item;
        buttonElement.style.background = "#fff";
        buttonElement.style.border = "1px solid #666";
    } else {
        audio.play();
        buttonElement.innerHTML = "<img class='pause' src='dist/media/pause.png'>";
        buttonElement.style.background = "#ececec";
        buttonElement.style.border = "5px solid #6633EE";
    }

    audio.addEventListener("ended", function(){
        audio.currentTime = 0;
        buttonElement.innerHTML = item;
        buttonElement.style.background = "#fff";
        buttonElement.style.border = "1px solid #666";
   });
    
}

export { playAudio };