const buttonOpenModal = document.querySelector('[data-open-modal]');
const inputName = document.querySelector('input[data-modal-name-input]');


function onClickFocusInput() {
  buttonOpenModal.addEventListener('click', () => {
    setTimeout(() => inputName.focus(), 500);
  });
}


export {onClickFocusInput};
