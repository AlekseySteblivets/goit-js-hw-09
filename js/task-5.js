'use strict'
// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//     подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
// < input type = "text" placeholder = "Ваше имя?" id = "name-input" />
//     <h1>Привет, <span id="name-output">незнакомец</span>!</h1>


const inputEl = document.querySelector('input[id=name-input]');
const nameLabelEl = document.querySelector('span[id=name-output]');
console.log(inputEl);
console.log(nameLabelEl);

inputEl.addEventListener('input', onInputChange);
function onInputChange(event) {
    event.currentTarget.value !== ''
        ? nameLabelEl.textContent = event.currentTarget.value
        : nameLabelEl.textContent = 'незнакомец';
};
