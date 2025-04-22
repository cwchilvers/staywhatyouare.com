let directionRight = true;

gsap.to("#bike", {
    x: 560,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    onRepeat: () => {
        directionRight = !directionRight;
        gsap.set("#bike", {
            scaleX: directionRight ? 1 : -1
        });
    }
});
