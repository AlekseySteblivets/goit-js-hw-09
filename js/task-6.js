'use strict'
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid.

const inputFocusEl = document.getElementById('validation-input');
const validLimit = Number(inputFocusEl.getAttribute('data-length'));
inputFocusEl.addEventListener('blur', onBlurClick);
function onBlurClick() {
    if (inputFocusEl.value.length !== validLimit) {
        inputFocusEl.classList.add('invalid');
        inputFocusEl.classList.remove('valid');
    } else {
        inputFocusEl.classList.add('valid');
        inputFocusEl.classList.remove('invalid');
    }
}
