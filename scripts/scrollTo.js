document.querySelectorAll(".scroll-to").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = this.getAttribute("href");

        gsap.to(window, {
            duration: 0.5,
            scrollTo: target,
            ease: "power2.inOut"
        });
    });
});