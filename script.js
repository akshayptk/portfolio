// Reveal sections as they enter the screen
const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealItems.forEach((item) => observer.observe(item));

// Mobile navigation
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuButton.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Subtle pointer glow on desktop
const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", (event) => {
  if (window.innerWidth > 800) {
    glow.style.background = `radial-gradient(350px circle at ${event.clientX}px ${event.clientY}px, rgba(133,111,220,.055), transparent 70%)`;
  }
});
