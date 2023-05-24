const rangeSlider = document.querySelector('.form__range-slider');
const rangeOutput = document.querySelector('.form__range-output');

rangeSlider.addEventListener('input', (evt) => {
    rangeOutput.innerHTML = evt.target.value + '%';
});