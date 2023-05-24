const selectSingle = document.querySelector('.form__select');
const selectSingle_title = selectSingle.querySelector('.form__select-title');
const selectSingle_labels = selectSingle.querySelectorAll('.form__select-label');
const selectContent = document.querySelector('.form__select-content');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
    selectContent.classList.remove('visible');
} else {
    selectSingle.setAttribute('data-state', 'active');
    selectContent.classList.add('visible');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
    selectContent.classList.remove('visible');
  });
}

