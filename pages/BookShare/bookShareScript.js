const booksPerPage = 6; 
const booksContainer = document.querySelector('.borrow-book'); 
const pagination = document.getElementById('pagination'); 
const prevButton = document.getElementById('prev'); 
const nextButton = document.getElementById('next'); 
const pageNumbers = document.getElementById('page-numbers'); 
const pageLinks = document.querySelectorAll('.page-link'); 

const books = Array.from(booksContainer.getElementsByClassName('book'));

const totalPages = Math.ceil(books.length / booksPerPage);
let current = 1;


function displayPage(page) {
    const books = Array.from(booksContainer.getElementsByClassName('book'));
    const startIndex = (page - 1) * booksPerPage; 
    const endIndex = startIndex + booksPerPage; 
    books.forEach((book, index) => { 
        if (index >= startIndex && index < endIndex) { 
            book.style.display = 'block'; 
        } else { 
            book.style.display = 'none'; 
        } 
    }); 
} 
 
function updatePagination(currentPage) { 
    pageNumbers.textContent = `Page ${currentPage} of ${totalPages}`; 
    prevButton.disabled = currentPage === 1; 
    nextButton.disabled = currentPage === totalPages; 
    pageLinks.forEach((link) => { 
        const page = parseInt(link.getAttribute('data-page')); 
        link.classList.toggle('active', page === currentPage); 
    }); 
} 
prevButton.addEventListener('click', () => {
    current--; 
    if (current >= 1) { 
        displayPage(current); 
        updatePagination(current); 
    }

    if (current < 1) {
        current = 3
        displayPage(3)
        updatePagination(3)
    }
});

nextButton.addEventListener('click', () => {
    current++; 
    if (current <= totalPages) { 
        displayPage(current); 
        updatePagination(current); 
    } 

    if (current > totalPages) {
        current = 1
        displayPage(1)
        updatePagination(1)
    }
}); 

pageLinks.forEach((link) => { 
    link.addEventListener('click', (e) => { 
        e.preventDefault(); 
        const page = parseInt(link.getAttribute('data-page')); 
            displayPage(page);
            updatePagination(page); 
    }); 
}); 

document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.getElementById('submit-book');
    displayPage(1);
    updatePagination(1)

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();

        submitForm();
    });
});

function submitForm() {
    var bookTitle = document.getElementById('bookname').value;
    var publishers = document.getElementById('publishers').value;
    var author = document.getElementById('author').value;
    var slot = document.getElementById('slot').value;
    var edition = document.getElementById('edition').value;
    var genre = document.getElementById('genre').value;
    var price = document.getElementById('price').value;

    var bookContainer = document.createElement('div');
    bookContainer.classList.add('book');

    var bookContent = `
        <div class="book1">
            <h2>${bookTitle}</h2><br>
            <ul type="none">
                <li>${publishers}</li>
                <li>${edition} edition</li>
                <li>${author}</li>
                <li>${genre}</li>
            </ul><br>
            <h3>Available in: ${slot}</h3>
            <h3>Price: ${price} Rs.</h3>
        </div>
    `;
    bookContainer.innerHTML = bookContent;

    var borrowBook = document.querySelector('.borrow-book');
    borrowBook.appendChild(bookContainer);
    const test = document.querySelector('.borrow-book');
    current = 3;
    displayPage(3);
    updatePagination(3);
}