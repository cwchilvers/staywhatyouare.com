gsap.registerPlugin(ScrollTrigger);

gsap.to("body", {
  backgroundPosition: "center 500px", 
  ease: "none",
  scrollTrigger: {
    trigger: document.documentElement,
    start: "top top",
    end: () => `${document.documentElement.scrollHeight - window.innerHeight}`,
    scrub: true,
    onUpdate: (self) => {
      const scrollProgress = self.progress; 
      const newBackgroundPos = scrollProgress * 500; 
      gsap.set("body", { backgroundPosition: `center ${newBackgroundPos}px` });
    }
  }
});
