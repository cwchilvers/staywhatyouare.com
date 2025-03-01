const globe = document.getElementById('globe');

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const offsetX = (mouseX - windowWidth / 2) / windowWidth;
    const offsetY = (mouseY - windowHeight / 2) / windowHeight;

    gsap.to(globe, {
        x: offsetX * 30,
        y: offsetY * 30,
        duration: 0.3,
        ease: "power1.out"
    });
});