// Smooth scrolling for internal links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    });
  });
  // Reveal sections on scroll
const sections = document.querySelectorAll("section");

const revealSection = () => {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);
