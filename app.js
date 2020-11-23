//Hamburger Menu Activate

const hamburger = document.querySelector('.header .nav-bar .ham');
const mobile_menu = document.querySelector('.header .nav-bar nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

//Header Background Color Change on Scroll Event

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 100) {
    header.style.backgroundColor = 'black';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});

//Scroll up button appears on scroll event

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 1000) {
    scrollUp.classList.add('active');
  } else {
    scrollUp.classList.remove('active');
  }
});

/* Prevent Link scroll to top default for empty href value */
const preventLinkDefault = () => {
  //Select all links
  const links = document.querySelectorAll('a');

  //loop through each link and add preventDefault()
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      if (link.getAttribute('href') === '#') {
        e.preventDefault();
      }
    });
  });
};
preventLinkDefault();
/* End Prevent Link scroll to top default */
