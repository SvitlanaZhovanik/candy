const menuToggle = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLinks = Array.from(
  document.querySelectorAll('.mobile-nav-link')
);

function openMenu() {
  mobileMenu.style.display = 'block';
  menuToggle.style.display = 'none';
  menuClose.style.display = 'block';
  mobileMenu.addEventListener('click', handleLink);
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  mobileMenu.style.display = 'none';
  menuToggle.style.display = 'block';
  menuClose.style.display = 'none';
  mobileMenu.removeEventListener('click', handleLink);
  document.body.style.overflow = '';
}

menuToggle.addEventListener('click', openMenu);

menuClose.addEventListener('click', closeMenu);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobileMenu.style.display === 'block') {
    closeMenu();
  }
});

function setScrollBehavior() {
  const html = document.documentElement;
  html.style.scrollBehavior = 'smooth';
}

window.onload = setScrollBehavior;

const handleLink = e => {
  const isLink = mobileMenuLinks.find(link => link === e.target);
  if (isLink) {
    closeMenu();
  }
};
