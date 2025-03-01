document.addEventListener("DOMContentLoaded", () => {
    const object = document.querySelector('#fish');
    
    const sound = new Audio('../assets/audio/fish.wav');
    let isPlaying = false;

    object.addEventListener('click', () => {
        if (!isPlaying) {
            isPlaying = true;
            sound.play();

            sound.onended = () => {
                isPlaying = false; 
            };
        }

        const currentX = parseFloat(window.getComputedStyle(object).transform.split(',')[4]) || 0;
        const currentY = parseFloat(window.getComputedStyle(object).transform.split(',')[5]) || 0;

        gsap.to(object, {
            x: () => gsap.utils.random(-3, 3) + currentX,  
            y: () => gsap.utils.random(-3, 3) + currentY, 
            repeat: 150,
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
