gsap.to("#ufo", {
    x: 400, 
    rotation: 15, 
    duration: 2,
    repeat: -1,
    yoyo: true, 
    ease: "sine.inOut",
    stagger: 0.1, 
});

document.addEventListener("DOMContentLoaded", () => {
    const object = document.querySelector('#ufo');
    
    const sound = new Audio('../assets/audio/ufo.wav');
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
