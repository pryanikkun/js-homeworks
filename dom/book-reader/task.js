const book = document.getElementById('book');
const fontSize = document.querySelectorAll('.font-size');

fontSize.forEach((element) => {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    let active = document.querySelector('.font-size_active');
    active.classList.remove('font-size_active');
    event.target.classList.add('font-size_active');
    if (event.target.dataset.size === 'small') {
      book.className = 'book book_fs-small';
    } else if (event.target.dataset.size === 'big') {
      book.className = 'book book_fs-big';
    } else {
      book.className = 'book';
    }
  });
})
