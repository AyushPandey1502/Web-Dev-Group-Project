const booksPerPage = 6; 
const booksContainer = document.querySelector('.borrow-book'); 
const pagination = document.getElementById('pagination'); 
const prevButton = document.getElementById('prev'); 
const nextButton = document.getElementById('next'); 
const pageNumbers = document.getElementById('page-numbers'); 
const pageLinks = document.querySelectorAll('.page-link'); 

const books = Array.from(booksContainer.getElementsByClassName('book')); 

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



function submitForm() {
    // Get form values
    var bookTitle = document.getElementById('bookname').value;
    var publishers = document.getElementById('publishers').value;
    var author = document.getElementById('author').value;
    var slot = document.getElementById('slot').value;
    var edition = document.getElementById('edition').value;
    var genre = document.getElementById('genre').value;
    var price = document.getElementById('price').value;

    // Create HTML elements for the new book
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

    // Append the new book to the book container
    booksContainer.appendChild(bookContainer);
}



