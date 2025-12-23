gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!reduceMotion) {
  gsap.from(".hero-title", { y: 80, opacity: 0, duration: 1 });
  gsap.from(".hero-subtitle", { y: 40, opacity: 0, delay: 0.3 });

  gsap.utils.toArray(".gsap-reveal").forEach((el) => {
    gsap.from(el, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      },
    });
  });

  document.querySelectorAll(".skill-bar").forEach((bar) => {
    gsap.to(bar, {
      width: bar.dataset.width + "%",
      scrollTrigger: {
        trigger: bar,
        start: "top 90%",
      },
    });
  });
}

/* SLIDER */
const slides = document.querySelectorAll(".project-slide");
let current = 0;

if (slides.length > 1) {
  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 3000);
}

/* NAV SCROLL */
ScrollTrigger.create({
  start: "top -100",
  onUpdate: (self) =>
    document
      .querySelector(".navbar")
      .classList.toggle("scrolled", self.scroll() > 100),
});

window.addEventListener("scroll", () => {
  document
    .querySelector(".zara-nav")
    .classList.toggle("scrolled", window.scrollY > 50);
});
