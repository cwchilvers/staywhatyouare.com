const object = document.querySelector('#logo');
let shakeAnimation;
let audio;

object.addEventListener('mouseenter', () => {
    // Play sound in a loop
    audio = new Audio('/assets/audio/logo.wav'); // Assuming the sound file is at this path
    audio.loop = true;
    audio.play();

    // Start shake animation
    shakeAnimation = gsap.to(object, {
        x: () => gsap.utils.random(-3, 3),
        y: () => gsap.utils.random(-3, 3),
        repeat: -1, 
        yoyo: true, 
        duration: 0.01, 
        ease: "power1.inOut",
        onRepeat: () => {
            gsap.to(object, {
                x: gsap.utils.random(-3, 3),
                y: gsap.utils.random(-3, 3),
                duration: 0.01
            });
        }
    });
});

object.addEventListener('mouseleave', () => {
    // Stop the shake animation and reset position
    shakeAnimation.kill();
    gsap.to(object, {
        x: 0,
        y: 0,
        duration: 0.1,
        ease: "power1.inOut"
    });

    // Stop the sound when the hover ends
    if (audio) {
        audio.pause();
        audio.currentTime = 0; // Reset to the start of the sound
    }
});
