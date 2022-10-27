function inputFormTel() {
  const inputTel = document.querySelectorAll('input[type="tel"]');

  inputTel.forEach(function (item) {
    item.addEventListener('input', () => {
      const value = item.value.replace(/\D+/g, '');
      const numberLength = 18;

      const prefixNumber = (str) => {
        if (str === '9') {
          return '+7 (9';
        }
        return '+7 (';
      };

      let result = '';

      for (let i = 0; i < value.length && i < numberLength; i++) {
        switch (i) {
          case 0:
            result += prefixNumber(value[i]);
            continue;
          case 4:
            result += ') ';
            break;
          case 7:
            result += '-';
            break;
          case 9:
            result += '-';
            break;
          default:
            break;
        }
        result += value[i];
      }
      item.value = result;
    });

    item.addEventListener('blur', () => {
      if (inputTel.value.length < 18) {
        inputTel.value = '';
      }
    });
  });
}

function inputFormName() {
  const inputName = document.querySelectorAll('input[type="text"]');

  inputName.forEach(function (item) {
    item.addEventListener('input', () => {
      const value = item.value.replace(/[^a-zA-ZА-Яа-яЁё]/gi, '');
      const nameLength = 20;

      let result = '';

      for (let i = 0; i < value.length && i < nameLength; i++) {
        result += value[i];
      }
      item.value = result;
    });
  });
}

export {inputFormTel, inputFormName};
