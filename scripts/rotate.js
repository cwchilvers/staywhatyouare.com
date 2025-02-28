gsap.to('#rotating', {
    rotation: 360, 
    repeat: -1,   
    duration: 250,  
    transformOrigin: "center", 
    ease: "linear" 
});

const rotatingElement = document.getElementById('rotating');

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const offsetX = (mouseX - windowWidth / 2) / windowWidth;
    const offsetY = (mouseY - windowHeight / 2) / windowHeight;

    gsap.to(rotatingElement, {
        x: -offsetX * 50,
        y: -offsetY * 50,
        duration: 0.3,
        ease: "power1.out"
    });
});