const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
  navLinks.classList.toggle('is-open', !isOpen);
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
    navLinks.classList.remove('is-open');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#print-resume').addEventListener('click', () => {
  window.print();
});

document.querySelectorAll('.icon-control').forEach((button) => {
  button.addEventListener('click', () => {
    const isActive = button.getAttribute('aria-pressed') === 'true';
    button.setAttribute('aria-pressed', String(!isActive));
    button.closest('.skill-card').classList.toggle('is-active', !isActive);
  });
});
