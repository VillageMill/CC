console.log("main.js loaded OK");

const navToggle = document.querySelector(".navToggle");
const nav = document.querySelector(".nav");

function closeMenu() {
  if (!navToggle || !nav) return;
  nav.classList.remove("isOpen");
  navToggle.setAttribute("aria-expanded", "false");
}

function toggleMenu() {
  if (!navToggle || !nav) return;
  const isOpen = nav.classList.toggle("isOpen");
  navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

if (navToggle && nav) {
  navToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close when a nav link is clicked
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => closeMenu());
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    const clickedInside = nav.contains(e.target) || navToggle.contains(e.target);
    if (!clickedInside) closeMenu();
  });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}
