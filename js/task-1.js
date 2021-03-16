'use srtict'

// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента(тега h2) 
// и количество элементов в категории(всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const amountCategoryEl = document.querySelectorAll('.item');
console.log(amountCategoryEl.length);

const firstTextCategory = amountCategoryEl[0].querySelector('h2');
console.log('категория:', firstTextCategory.textContent);

const amountElementsEl = document.querySelectorAll('.item ul');
const firstElementEl = amountElementsEl[0].querySelectorAll('li');
console.log('Количество элементов:', firstElementEl.length);


const secondTextCategory = amountCategoryEl[1].querySelector('h2');
const secondElementEl = amountElementsEl[1].querySelectorAll('li');
console.log('категория:', secondTextCategory.textContent);
console.log('Количество элементов:', secondElementEl.length);


const thirdTextCategory = amountCategoryEl[2].firstElementChild.textContent;
const thirdElementEl = amountCategoryEl[2].querySelectorAll('li');

console.log('категория:', thirdTextCategory);
console.log('Количество элементов:', thirdElementEl.length);

