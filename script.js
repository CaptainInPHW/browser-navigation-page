const keyboard = window.keyboard_data;
const lettersEl = document.querySelector('.letters');

const keyMap = keyboard.reduce((_keyMap, row) => Object.assign(_keyMap, row), {});

!(function createKeyboard() {
  keyboard.forEach(function iterator(row, index) {
    const rowEl = document.createElement('div');
    rowEl.classList.add(`row${index}`);
    for (const [key, value] of Object.entries(row)) {
      const kbd = document.createElement('div');
      kbd.classList.add('kbd');
      kbd.classList.add(key);
      kbd.setAttribute('title', value);
      kbd.textContent = key;
      rowEl.appendChild(kbd);
    }
    lettersEl.appendChild(rowEl);
  });
})()

!(function bindClickEvent() {
  lettersEl.addEventListener('click', function handleClick(e) {
    const key = e.target.textContent;
    if (Object.keys(keyMap).includes(key)) {
      window.open('//' + keyMap[key], '_blank');
    }
  });
})()

!(function bindSearchEvent() {
  const googleEl = document.querySelector('.google');
  const baiduEl = document.querySelector('.baidu');
  googleEl.addEventListener('click', function () {
    const value = document.querySelector('input').value.trim();
    if (value) {
      window.open('https://www.google.com/search?q=' + value, '_blank');
    }
  });
  baiduEl.addEventListener('click', function () {
    const value = document.querySelector('input').value.trim();
    if (value) {
      window.open('https://www.baidu.com/s?wd=' + value, '_blank');
    }
  });
})()