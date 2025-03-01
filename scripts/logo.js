const object = document.querySelector('#logo');
let shakeAnimation;
let audio;

object.addEventListener('mouseenter', () => {
    audio = new Audio('/assets/audio/logo.wav'); 
    audio.loop = true;
    audio.play();

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

    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
});
