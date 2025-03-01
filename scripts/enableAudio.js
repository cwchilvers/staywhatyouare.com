document.addEventListener("DOMContentLoaded", () => {
    const silent = new Audio('assets/audio/silent.wav');

    document.body.addEventListener('click', () => {
        silent.play();
    });
});