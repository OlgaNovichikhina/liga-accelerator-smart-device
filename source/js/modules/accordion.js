const buttonNav = document.querySelector('.footer__btn--nav');
const buttonContact = document.querySelector('.footer__btn--contact');
const blockNav = document.querySelector('.footer__nav-list');
const blockContact = document.querySelector('.footer__contact-list');
const footerTitleNav = document.querySelector('.footer__title--nav');
const footerTitleContact = document.querySelector('.footer__title--contact');

const closeBlock = function (block, btn) {
  btn.classList.remove('footer__btn--active');
  block.style.maxHeight = null;
};

const showBlock = function (block, btn) {
  btn.classList.add('footer__btn--active');
  block.style.maxHeight = blockNav.scrollHeight + 'px';
};

function showFooterItem() {
  buttonNav.classList.remove('footer__btn--nav-nojs');
  buttonContact.classList.remove('footer__btn--contact-nojs');
  blockNav.classList.remove('footer__nav-list--nojs');
  blockContact.classList.remove('footer__contact-list--nojs');
  if (footerTitleNav) {
    footerTitleNav.addEventListener('click', function (evt) {
      evt.preventDefault();
      if (blockNav.style.maxHeight) {
        closeBlock(blockNav, buttonNav);
      } else {
        showBlock(blockNav, buttonNav);
        closeBlock(blockContact, buttonContact);
      }
    });
  }

  if (footerTitleContact) {
    footerTitleContact.addEventListener('click', function (evt) {
      evt.preventDefault();
      if (blockContact.style.maxHeight) {
        closeBlock(blockContact, buttonContact);
      } else {
        showBlock(blockContact, buttonContact);
        closeBlock(blockNav, buttonNav);
      }
    });
  }
}

export {showFooterItem};
