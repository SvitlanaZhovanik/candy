const menuToggle = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const desktopNavLinks = document.querySelectorAll('.desktop-nav-link');

function openMenu() {
  mobileMenu.style.display = 'block';
  menuToggle.style.display = 'none';
  menuClose.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  mobileMenu.style.display = 'none';
  menuToggle.style.display = 'block';
  menuClose.style.display = 'none';
  document.body.style.overflow = '';
}

menuToggle.addEventListener('click', openMenu);

menuClose.addEventListener('click', closeMenu);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobileMenu.style.display === 'block') {
    closeMenu();
  }
});

desktopNavLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const href = link.getAttribute('href');
    const targetId = href.startsWith('/candy-planet/#')
      ? href.substring(14)
      : null;
    const isRootLink = href === '/candy-planet/' || href === '/candy-planet';
    const isCurrentPageHome = window.location.pathname === '/candy-planet/';

    if (isRootLink) {
      window.location.href = '/candy-planet/';
    } else if (targetId) {
      if (!isCurrentPageHome) {
        window.location.href = '/candy-planet/?scrollTo=' + targetId;
      }

      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => {
      closeMenu();
    }, 100);
  });
});

mobileNavLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const href = link.getAttribute('href');
    const targetId = href.startsWith('/candy-planet/#')
      ? href.substring(14)
      : null;
    const isRootLink = href === '/candy-planet/' || href === '/candy-planet';
    const isCurrentPageHome = window.location.pathname === '/candy-planet/';

    if (isRootLink) {
      window.location.href = '/candy-planet/';
    } else if (targetId) {
      if (!isCurrentPageHome) {
        window.location.href = '/candy-planet/?scrollTo=' + targetId;
      }

      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => {
      closeMenu();
    }, 100);
  });
});

window.addEventListener('load', () => {
  const params = new URLSearchParams(window.location.search);
  const targetId = params.get('scrollTo');

  if (targetId) {
    const targetElement = document.querySelector('#' + targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });

      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }
});
