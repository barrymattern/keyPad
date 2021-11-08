const PASSCODE = '0921';

const updateColors = (ele1, keyPadColor,
                      ele2, keyColor, shadowSettings, textColor) => {
  ele1.style.backgroundColor = keyPadColor;
  ele2.style.backgroundColor = keyColor;
  ele2.style.boxShadow = shadowSettings;
  ele2.style.color = textColor;
};

window.addEventListener('DOMContentLoaded', event => {
  const keyPad = document.querySelector('.key-pad__all-keys');
  const allKeys = document.querySelectorAll('.key-pad__key');
  let inputCode = '';

  allKeys.forEach(key => {
    key.addEventListener('click', event => {
      let fullId = event.target.id;
      let id = fullId[fullId.length - 1];

      inputCode += id;
      
      if (key.style.backgroundColor === '') {
        updateColors(keyPad, null,
          key, 'lightGray', '2px 2px 3px 1px rgba(0, 0, 0, 0.2)', 'darkGray');
      } else if (key.style.backgroundColor === 'green' ||
                  key.style.backgroundColor === 'red') {
        inputCode = '';
      }

    if (id === 'b') {
      allKeys.forEach(key => {
        updateColors(keyPad, null,
          key, null, null, null);

        inputCode = '';
      });

    } else if (inputCode === PASSCODE) {
      allKeys.forEach(key => {
        updateColors(keyPad, 'lightGreen',
                      key, 'green', '2px 2px 5px 0px darkGreen', 'darkGreen');

        inputCode = '';

        setTimeout(() => {
          window.open('https://open.appacademy.io/learn/js-py---sept-2021-cohort-1-online/week-9---browser--dom--events--and-storage/element-selection-and-manipulation-objectives', '_blank');
        }, 500);

        setTimeout(() => {
          updateColors(keyPad, null,
                        key, null, null, null);
        }, 1250);
      });

      } else if (inputCode.length >= 4) {
        allKeys.forEach(key => {
          updateColors(keyPad, 'pink',
                        key, 'red', '2px 2px 5px 0px darkRed', 'darkRed');

          inputCode = '';

          setTimeout(() => {
            updateColors(keyPad, null,
                          key, null, null, null);
          }, 1250);
        });
      }
    });
  });
});
