const booksPerPage = 4;
const booksContainer = document.querySelector('.vac-container');
const pagination = document.getElementById('pagination');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const pageNumbers = document.getElementById('page-numbers');
const pageLinks = document.querySelectorAll('.page-link');

const books = Array.from(booksContainer.getElementsByClassName('vacancy'));

const totalPages = Math.ceil(books.length / booksPerPage);
let currentPage = 1;


function displayPage(page) {
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

function updatePagination() {
    pageNumbers.textContent = `Page ${currentPage} of ${totalPages}`;
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
    pageLinks.forEach((link) => {
        const page = parseInt(link.getAttribute('data-page'));
        link.classList.toggle('active', page === currentPage);
    });
}
prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayPage(currentPage);
        updatePagination();
    }
});

nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        displayPage(currentPage);
        updatePagination();
    }
});

// Event listener for page number buttons 
pageLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = parseInt(link.getAttribute('data-page'));
        if (page !== currentPage) {
            currentPage = page;
            displayPage(currentPage);
            updatePagination();
        }
    });
});

displayPage(currentPage);
updatePagination();



