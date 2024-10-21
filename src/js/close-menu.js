const closeButton = document.querySelector('.close-button-mobile-menu');
const mobileMenu = document.querySelector('.container-mobile-menu');

closeButton.addEventListener('click', () => {
  mobileMenu.style.visibility = 'hidden';
  mobileMenu.style.opacity = '0';
});
