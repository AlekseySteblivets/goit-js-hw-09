'use strict'
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


const countEl = document.querySelector('span[id = value]');
const decrBut = document.querySelector('button[data-action = decrement]');
const incrBut = document.querySelector('button[data-action = increment]');
let counterValue = Number(countEl.textContent);

const increment = () => {
    counterValue += 1;
    countEl.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;
    countEl.textContent = counterValue;
};

incrBut.addEventListener('click', increment);
decrBut.addEventListener('click', decrement);


