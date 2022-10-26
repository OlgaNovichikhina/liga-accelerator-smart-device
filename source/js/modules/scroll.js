const anchors = document.querySelectorAll('a[href*="#"]');

function scrollPage() {
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const blockID = anchor.getAttribute('href').substring(1);
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'});
    });
  }
}

export {scrollPage};
