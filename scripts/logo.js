const object = document.querySelector('#logo');
let shakeAnimation;
let sound;

object.addEventListener('mouseenter', () => {
    sound = new Audio('/assets/audio/logo.wav'); 
    sound.loop = true;
    sound.play();

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
    shakeAnimation.kill();
    gsap.to(object, {
        x: 0,
        y: 0,
        duration: 0.1,
        ease: "power1.inOut"
    });

    if (sound) {
        sound.pause();
        sound.currentTime = 0;
    }
});
