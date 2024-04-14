let numClothes = 20;
let tokenNumber = 251;
let tokenColor = 'red';

function updateGreeting() {
    let currentTime = new Date().getHours();
    let greeting; 

    if (currentTime < 12) {
        greeting = "Morning";
    } else if (currentTime < 18) {
        greeting = "Afternoon";
    } else {
        greeting = "Evening";
    }

    document.querySelector('.greeting').innerHTML = greeting;
}

function submitClothes(){
    document.querySelector('.chotta-dhobi-right').style.display = 'none';
    document.querySelector('.chotta-dhobi-center').style.display = 'block';
    document.querySelector('.washes-left').textContent = parseInt(document.querySelector('.washes-left').textContent) - 1;

}
function clothesCollection() {
    alert('Thank you for collecting your clothes. Have a nice day!!');
    document.querySelector('.chotta-dhobi-center').style.display = 'none';
    document.querySelector('.chotta-dhobi-dashboard').style.display = 'block';
    
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = String(currentDate.getMonth() + 1).padStart(2, '0');
    let day = String(currentDate.getDate()).padStart(2, '0');

    let formattedDate = `${year}-${month}-${day}`;

    let newLi = document.createElement('li');
    newLi.textContent = numClothes + ' clothes washed on ' + formattedDate;

    let historyList = document.querySelector('.chotta-dhobi-history ul');
    historyList.insertBefore(newLi, historyList.firstChild);

    let lastLi = historyList.lastElementChild;
    if (lastLi) {
        lastLi.remove();
    }
}



function changeColor() {
    const chottaDhobiCenter = document.querySelector('.chotta-dhobi-center');
    if (chottaDhobiCenter && getComputedStyle(chottaDhobiCenter).display === 'block') {
        const currentStatus = document.querySelector('.current-status');
        currentStatus.style.color = 'yellow'; 
        currentStatus.innerHTML = 'Collect Now!';
        // currentStatus.style.fontSize = '15px';
        currentStatus.style.borderColor = 'yellow';
        document.querySelector('.collect-btn').style.display = 'block';
        document.querySelector('.status-content').innerHTML = 'Spinning, Rinsing, Drying and Folding with Precision. ! Hey buddy, washing of your clothes is completed. Please collect ASAP!!';
    }
}

setInterval(changeColor, 5000);



function updateDates() {
    const dateSpans = document.querySelectorAll('.date');
    let currentDate = new Date();

    for (let i = 0; i < dateSpans.length; i++) {
        currentDate.setDate(currentDate.getDate() - 7);
        const formattedDate = currentDate.toISOString().split('T')[0];
        dateSpans[i].textContent = formattedDate;
    }
}


function submitBtn(){
    document.querySelector('.chotta-dhobi-dashboard').style.display = 'none';
    document.querySelector('.chotta-dhobi-right').style.display = 'block';
}

window.onload = function() {
    updateGreeting();
    updateDates();
};

document.getElementById("clothesForm").addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateForm()) {
        submitClothes();
        document.querySelector('.clothes-num').innerHTML = numClothes;
        document.querySelector('.clothes-token-num').innerHTML = tokenNumber;
        document.querySelector('.clothes-tag-details i').style.color = tokenColor;

        
        console.log("Form submitted successfully!");
    } else {
        console.log("Please fill in all required fields.");
    }
});

function validateForm() {
    var numClothesValue = document.getElementById("numClothes").value;
    var tokenNumberValue = document.getElementById("tokenNumber").value;
    var tokenColorValue = document.getElementById("tokenColor").value;
    
    numClothes = numClothesValue;
    tokenNumber = tokenNumberValue;
    tokenColor = tokenColorValue;

    if (numClothesValue.trim() === "" || tokenNumberValue.trim() === "" || tokenColorValue.trim() === "") {
        return false;
    }
    return true;
}