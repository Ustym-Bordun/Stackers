const closeButton = document.querySelector('.close-button-mobile-menu');
const mobileMenu = document.querySelector('.container-mobile-menu');
const burgerMenuButton = document.querySelector('.header-burger-btn');

closeButton.addEventListener('click', () => {
  mobileMenu.style.visibility = 'hidden';
  mobileMenu.style.opacity = '0';
});

burgerMenuButton.addEventListener('click', () => {
  mobileMenu.style.visibility = 'visible';
  mobileMenu.style.opacity = '1';
});
