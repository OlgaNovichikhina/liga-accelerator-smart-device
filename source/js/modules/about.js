const aboutMore = document.querySelector('.about__info--more');
const aboutButton = document.querySelector('.about__button');
const aboutMobile = document.querySelector('.about__info--mobile');

function showMoreText() {
  aboutMore.style.display = 'none';
  aboutButton.style.display = 'flex';
  aboutButton.addEventListener('click', () => {
    aboutMore.style.display = 'none';
    const isOpened = aboutMore.classList.contains('is-open');
    aboutMore.classList.remove('is-open');
    aboutMobile.classList.remove('is-open');
    aboutButton.textContent = 'Подробнее';

    if (!isOpened) {
      aboutMore.style.display = 'block';
      aboutMore.classList.add('is-open');
      aboutMobile.classList.add('is-open');
      aboutButton.textContent = 'Свернуть';
    }
  });
}

export {showMoreText};
