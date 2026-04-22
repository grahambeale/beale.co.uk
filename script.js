// Nav border + name swap on scroll
const nav = document.getElementById('nav');
const navName = document.querySelector('.nav-name');
let currentScrolled = false;
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 60;
  nav.classList.toggle('scrolled', scrolled);
  if (scrolled !== currentScrolled) {
    currentScrolled = scrolled;
    navName.classList.add('swapping');
    setTimeout(() => {
      navName.textContent = scrolled ? 'Graham Beale' : 'beale.co.uk';
      navName.classList.remove('swapping');
    }, 150);
  }
}, { passive: true });

// Active nav link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));
