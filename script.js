// Для збереження книг на стороні клієнта (як заміна для MS SQL)
let books = JSON.parse(localStorage.getItem('books')) || [];

// Відображення списку книг на головній сторінці
function displayBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    books.forEach((book, index) => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.innerHTML = `
            <a href="book.html?id=${index}">${book.title}</a>
            <p>Автор: ${book.author}</p>
        `;
        bookList.appendChild(bookItem);
    });
}

// Зберегти нову книгу
document.getElementById('add-book-form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const content = document.getElementById('book-content').value;
    const cover = document.getElementById('book-cover').files[0];

    if (content.length < 100) {
        alert('Контент книги має бути не менше 100 символів!');
        return;
    }

    const newBook = {
        title,
        author,
        content,
        cover: cover ? URL.createObjectURL(cover) : null
    };

    books.push(newBook);
    localStorage.setItem('books', JSON.stringify(books));

    window.location.href = 'index.html'; // Після додавання повертаємось на головну
});

// Завантаження книги для перегляду
if (window.location.pathname.includes('book.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('id');

    const book = books[bookId];
    if (book) {
        document.getElementById('book-title').textContent = book.title;
        document.getElementById('book-content').textContent = book.content;
    }
}

displayBooks();

function displayBooks(books) {
    const booksContainer = document.getElementById('books-list');
    booksContainer.innerHTML = ''; // Очистити попередній контент
  
    books.forEach(book => {
      const bookItem = document.createElement('div');
      bookItem.className = 'book-item';
      bookItem.innerHTML = `
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <a href="/read/${book.id}">Read</a>
      `;
      booksContainer.appendChild(bookItem);
    });
  }
  function displayBooks(books) {
    const booksContainer = document.getElementById('books-list');
    booksContainer.innerHTML = ''; // Очистити попередній контент
  
    books.forEach(book => {
      const bookItem = document.createElement('div');
      bookItem.className = 'book-item';
      bookItem.innerHTML = `
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <a href="/read/${book.id}">Read</a>
      `;
      booksContainer.appendChild(bookItem);
    });
  }
    