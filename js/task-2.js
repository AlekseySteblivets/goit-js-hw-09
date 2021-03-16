'use strict'

// В HTML есть пустой список ul#ingredients.
// В JS есть массив строк.
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
// после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM - узлов используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const idListEl = document.querySelector('ul[id = ingredients]');

const elements = ingredients.map(ingredient => {
    const creatItemEl = document.createElement('li');
    creatItemEl.textContent = ingredient;
    return creatItemEl;

});

idListEl.append(...elements);
console.log(idListEl);

