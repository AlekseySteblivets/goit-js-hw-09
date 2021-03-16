// import cards from '../js/practics.js';
// const listEl = document.createElement('ul');
// listEl.classList.add('cars-list');
// document.body.prepend(listEl);

const formRef = document.querySelector('.form');
const inputRef = document.querySelector('.input');
const filterRef = document.querySelector('.filter');
const btnRef = document.querySelector('.btn');
const listRef = document.querySelector('.list');


const arr = []

formRef.addEventListener('submit', e => {
    e.preventDefault()
    arr.push(inputRef.value)
    listRef.innerHTML = ''

    const markup = arr.map(item => `<li><p>${item}</p></li>`)
        .join(' ')
    listRef.insertAdjacentHTML('beforeend', markup)
    inputRef.value = ''
})

console.log(arr);
