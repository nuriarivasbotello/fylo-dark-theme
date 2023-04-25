// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
const iconElement = document.getElementById('icon');
const iconContainerElement = document.getElementById('icon-container');
const modeElement = document.getElementById('mode');
const logoElement = document.getElementById('logo');
function handleClick() {
  if (iconElement.classList.contains('fa-moon')) {
    iconElement.classList.replace('fa-moon', 'fa-sun');
    modeElement.textContent = 'Light Mode';
    logoElement.src = './assets/images/logo-light.svg';
  } else if (icon.classList.contains('fa-sun')) {
    iconElement.classList.replace('fa-sun', 'fa-moon');
    modeElement.textContent = 'Dark Mode';
    logoElement.src = './assets/images/logo-dark.svg';
  }
  document.body.classList.toggle('light');
}
iconContainerElement.addEventListener('click', handleClick);
