document.addEventListener("DOMContentLoaded", () => {
    const object = document.querySelector('#trex');

    const sounds = [
        '../assets/audio/trex/trex-01.wav',
        '../assets/audio/trex/trex-02.wav',
        '../assets/audio/trex/trex-03.wav',
        '../assets/audio/trex/trex-04.wav'
    ];

    object.addEventListener('click', () => {
        const randomSound = sounds[Math.floor(Math.random() * sounds.length)];

        const audio = new Audio(randomSound);
        audio.play();

        const currentX = parseFloat(window.getComputedStyle(object).transform.split(',')[4]) || 0;
        const currentY = parseFloat(window.getComputedStyle(object).transform.split(',')[5]) || 0;

        gsap.to(object, {
            x: () => gsap.utils.random(-3, 3) + currentX,  
            y: () => gsap.utils.random(-3, 3) + currentY, 
            repeat: 40,
            yoyo: true, 
            duration: 0.02,
            ease: "power1.inOut",
            onRepeat: () => {
                gsap.to(object, {
                    x: gsap.utils.random(-3, 3) + currentX, 
                    y: gsap.utils.random(-3, 3) + currentY,  
                    duration: 0.02
                });
            },
            onComplete: () => {
                gsap.to(object, {
                    x: currentX,  
                    y: currentY, 
                    duration: 0.1,
                    ease: "power1.inOut"
                });
            }
        });
    });
});
