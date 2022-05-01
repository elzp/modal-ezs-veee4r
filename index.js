// Import stylesheets
import './style.css';

const modal = document.querySelector('.main-modal');
const exit = document.querySelector('.fill-current');
const openButton = document.querySelector('body>div>button');
const exitButtons = document.querySelectorAll('body>div:nth-child(2) button');
exit.addEventListener('click', () => {
  modal.style.visibility = 'hidden';
});

openButton.addEventListener('click', () => {
  modal.style.visibility = 'visible';
});

exitButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    modal.style.visibility = 'hidden';
  });
});

// credits to https://simplernerd.com/js-click-parent/
modal.addEventListener('click', (event) => {
  console.log(event.target, event.currentTarget);
  if (!(event.target !== event.currentTarget)) {
    console.log('it is modal');
    modal.style.visibility = 'hidden';
  }
});

