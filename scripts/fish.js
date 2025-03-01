document.addEventListener("DOMContentLoaded", () => {
    const object = document.querySelector('#fish');
    
    const sound = new Audio('../assets/audio/fish/fish.wav');
    let isPlaying = false;

    object.addEventListener('click', () => {
        if (!isPlaying) {
            isPlaying = true;
            sound.play();

            sound.onended = () => {
                isPlaying = false; 
            };
        }
    });
});
