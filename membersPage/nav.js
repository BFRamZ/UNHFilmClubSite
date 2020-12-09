 /* JavaScript for our site's navigation bar */

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
let menuOpen = false;

toggleButton.addEventListener('click', () => {
  
  if(!menuOpen) {
	  toggleButton.classList.add('open');
	  navbarLinks.classList.add('open');
	  menuOpen = true;
  } else {
	  toggleButton.classList.remove('open');
	  navbarLinks.classList.remove('open');
	  menuOpen = false;
  }
});

