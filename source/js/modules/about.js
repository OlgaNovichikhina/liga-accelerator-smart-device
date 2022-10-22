const aboutMore = document.querySelector('[data-more]');
const aboutButton = document.querySelector('[data-button]');
const aboutMobile = document.querySelector('[data-mobile]');

function showMoreText() {
  aboutButton.addEventListener('click', () => {
    const isOpened = aboutMore.classList.contains('is-open');
    aboutMore.classList.remove('is-open');
    aboutMobile.classList.remove('is-open');
    aboutButton.textContent = 'Подробнее';

    if (!isOpened) {
      aboutMore.classList.add('is-open');
      aboutMobile.classList.add('is-open');
      aboutButton.textContent = 'Свернуть';
    }
  });
}

export {showMoreText};
