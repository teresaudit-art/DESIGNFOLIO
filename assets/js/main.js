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

/* =========================
   HERO PARALLAX (BRIEF)
========================= */

if (!reduceMotion) {
  gsap.to(".floating-shapes img", {
    yPercent: 15,
    ease: "none",
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
}

/* =========================
   STAGGER PROYECTOS / GALERÍA
========================= */

if (!reduceMotion) {
  gsap.from("#gallery .image-card", {
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#gallery",
      start: "top 80%",
    },
  });
}

/* SLIDER */
const slides = document.querySelectorAll(".project-slide");
let current = 0;

if (slides.length > 1 && window.innerWidth >= 1024) {
  slides[0].classList.add("active");

  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 3000);
} else {
  slides.forEach((slide) => {
    slide.classList.add("active");
  });
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

/* =========================
   SCROLL REVEAL POR SECCIÓN
========================= */

if (!reduceMotion) {
  gsap.from("#about", {
    opacity: 0,
    y: 60,
    duration: 1,
    scrollTrigger: {
      trigger: "#about",
      start: "top 85%",
    },
  });

  gsap.from("#projects h2", {
    opacity: 0,
    y: 40,
    scrollTrigger: {
      trigger: "#projects",
      start: "top 80%",
    },
  });

  gsap.from("#contact", {
    opacity: 0,
    y: 40,
    scrollTrigger: {
      trigger: "#contact",
      start: "top 85%",
    },
  });
}
