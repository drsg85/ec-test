'use strict';

let input = document.querySelector('.form__input-file');
let label = input.nextElementSibling,
labelVal = document.querySelector('.form__file-button-text').innerText;

input.addEventListener('change', function (e) {
    let countFiles = '';
    if (this.files && this.files.length >= 1)
        countFiles = this.files.length;

    if (countFiles)
        label.querySelector('.form__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;
    else
        label.querySelector('.form__file-button-text').innerText = labelVal;
    });
    