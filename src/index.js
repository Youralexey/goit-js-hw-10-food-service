import './style.css';
import menu from './menu.json';
import menuItemsTemplate from './menu-items.hbs';


const menuEl = document.querySelector('.js-menu');
const bodyEl = document.querySelector('body');
const inputEl = document.querySelector('.theme-switch__toggle');

const markup = menuItemsTemplate(menu);
menuEl.insertAdjacentHTML('beforeend', markup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

reload();


inputEl.addEventListener('change', onSelectTheme);

function onSelectTheme(evt) {
  evt.preventDefault();
  bodyEl.classList.add(Theme.LIGHT);
  bodyEl.classList.toggle(Theme.DARK);
  
  if (bodyEl.classList.value === 'light-theme') {
    localStorage.setItem('theme', Theme.LIGHT);
  } else {
    localStorage.setItem('theme', Theme.DARK);
  }
}

 function reload() {
    const saveTheme = localStorage.getItem('theme');
   if (saveTheme) {
     if (saveTheme === 'dark-theme') {
       inputEl.checked = true;
       bodyEl.classList.add(Theme.DARK);
       localStorage.setItem('theme', Theme.DARK);
     } else {
       inputEl.checked = false;
       bodyEl.classList.add(Theme.LIGHT);
       localStorage.setItem('theme', Theme.LIGHT);
     }
    }
  };
