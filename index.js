// Import stylesheets
import './style.css';

const modal = document.querySelector('.main-modal');
const exit = document.querySelector('.fill-current');
const button = document.querySelector('body>div>button');

exit.addEventListener('click', () => {
  modal.style.visibility = 'hidden';
});

button.addEventListener('click', () => {
  modal.style.visibility = 'visible';
});
