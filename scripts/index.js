// Correct passcode
const PASSCODE = '0921';

// Helper function to update keyPad colors
const updateColors = (ele1, keyPadColor,
  ele2, keyColor, shadowSettings, textColor) => {
  ele1.style.backgroundColor = keyPadColor;
  ele2.style.backgroundColor = keyColor;
  ele2.style.boxShadow = shadowSettings;
  ele2.style.color = textColor;
};

// Load all DOM content before running scripts
window.addEventListener('DOMContentLoaded', event => {
  const keyPad = document.querySelector('.key-pad__all-keys');
  const allKeys = document.querySelectorAll('.key-pad__key');
  let inputCode = '';

  // Add 'click' eventListener to each individual key
  keyPad.addEventListener('click', event => {
    const currentTarget = event.target
    if (currentTarget.classList.value == 'key-pad__key'){
      let fullId = currentTarget.id;
      let id = fullId[fullId.length - 1];

      inputCode += id;

      // Don't change key color if already red or green
      if (currentTarget.style.backgroundColor === '') {
        updateColors(keyPad, null,
          currentTarget, 'lightGray', '2px 2px 3px 1px rgba(0, 0, 0, 0.2)', 'darkGray');
      } else if (currentTarget.style.backgroundColor === 'green' ||
        currentTarget.style.backgroundColor === 'red') {
        inputCode = '';
      }

      // When "#" is pressed, reset colors & inputCode
      if (id === 'b') {
        allKeys.forEach(key => {
          // Reset keyPad colors to original
          updateColors(keyPad, null,
            key, null, null, null);

          inputCode = '';
        });

        // When passcode is correct
      } else if (inputCode === PASSCODE) {
        allKeys.forEach(key => {
          // Set keyPad colors to green
          updateColors(keyPad, 'lightGreen',
            key, 'green', '2px 2px 5px 0px darkGreen', 'darkGreen');

          inputCode = '';

          // Open a/A-Open DOM curriculum in new window
          setTimeout(() => {
            window.open('https://open.appacademy.io/learn/js-py---sept-2021-cohort-1-online/week-9---browser--dom--events--and-storage/element-selection-and-manipulation-objectives', '_blank');
          }, 500);

          // Reset keyPad colors to original
          setTimeout(() => {
            updateColors(keyPad, null,
              key, null, null, null);
          }, 1250);
        });

        // When passcode is incorrect
      } else if (inputCode.length >= 4) {
        allKeys.forEach(key => {
          // Set keyPad colors to red
          updateColors(keyPad, 'pink',
            key, 'red', '2px 2px 5px 0px darkRed', 'darkRed');

          inputCode = '';

          // Reset keyPad colors to original
          setTimeout(() => {
            updateColors(keyPad, null,
              key, null, null, null);
          }, 1250);
        });
      }
    }
  })
});
