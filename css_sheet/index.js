// Debounce function to delay the scroll event handler
function debounce(func, delay) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}

let isScrolling = false;

window.addEventListener('scroll', debounce(function() {
  const header = document.querySelector('header');
  const body = document.querySelector('body');
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const target = scrollTop > 0 && !body.classList.contains('sticky_nav') ? header.offsetTop : 0;
  const duration = 500; // Adjust the duration (in milliseconds) to your liking

  if (scrollTop > 0) {
    header.classList.add('sticky');
    body.classList.add('sticky_nav');
  } else {
    header.classList.remove('sticky');
    body.classList.remove('sticky_nav');
  }

  if (!isScrolling && scrollTop !== target) {
    isScrolling = true;
    scrollTo({
      top: target,
      behavior: 'smooth',
      duration: duration
    });

    setTimeout(function() {
      isScrolling = false;
    }, duration);
  }
}), 50);
