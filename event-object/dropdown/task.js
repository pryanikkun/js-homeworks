const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItems = document.querySelectorAll('.dropdown__item');

dropdownValue.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_active');
});

dropdownItems.forEach( item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        dropdownValue.textContent = item.querySelector(
            '.dropdown__link').textContent.trim();
        dropdownList.classList.remove('dropdown__list_active');
    });
});
