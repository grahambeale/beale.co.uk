// Scroll-driven nav name swap: beale.co.uk → Graham Beale
(function () {
  const siteLink = document.querySelector('.cs-nav-site');
  if (!siteLink) return;

  let currentScrolled = false;

  window.addEventListener('scroll', function () {
    const scrolled = window.scrollY > 60;
    if (scrolled === currentScrolled) return;
    currentScrolled = scrolled;

    siteLink.classList.add('swapping');
    setTimeout(function () {
      siteLink.textContent = scrolled ? 'Graham Beale' : 'beale.co.uk';
      siteLink.classList.remove('swapping');
    }, 150);
  }, { passive: true });
}());
