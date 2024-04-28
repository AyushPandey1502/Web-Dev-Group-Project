const userData = localStorage.getItem('userData');

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


// Select the form elements
const pickUpInput = document.querySelector('.loc');
const dropInput = document.querySelector('.dest');
const dateInput = document.querySelector('.date');
const vacancyInput = document.querySelector('.vac');
const form = document.querySelector('.ride_list');

// Select the container for ride cards
const rideCardsContainer = document.querySelector('.vac-container');

// Initialize the current card index
let currentCardIndex = 0;

// Function to update a specific ride card with user input
function updateRideCard(index) {
    // Select the ride card based on the index
    const rideCard = rideCardsContainer.querySelector(`.v${index + 1}`);

    // Update the content of the card with user input
    rideCard.innerHTML = `
        <b>From</b>: ${pickUpInput.value} <br><br>
        <b>To</b>: ${dropInput.value} <br><br>
        <b>Date</b>: ${dateInput.value} <br><br>
        <b>Vacancy</b>: ${vacancyInput.value} <br><br>
        <button>Book Ride</button>
    `;
}

// Event listener for form submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    // Update the current card with user input
    updateRideCard(currentCardIndex);

    // Increment the current card index
    currentCardIndex++;

    // Reset the form after updating the card
    form.reset();
});


if (userData && userData[0].length > 0) {    
    var loginStatusDiv = document.querySelector(".login-status");
    loginStatusDiv.innerHTML = `<acronym title="${userData}"><i class='fa-solid fa-user login-icon'></i></acronym>`;
}
