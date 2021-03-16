'use strict'
// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const inputRangeEl = document.querySelector('input[id=font-size-control]');
const spanEl = document.querySelector('span[id=text]');

inputRangeEl.addEventListener('input', onMoveInput)
function onMoveInput(event) {
    spanEl.style.fontSize = `${this.value}px`;
    console.log(event);
};

