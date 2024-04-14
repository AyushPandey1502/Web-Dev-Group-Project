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

window.onload = function() {
    updateGreeting();
};

function submitClothes(){
    document.querySelector('.chotta-dhobi-right').style.display = 'none';
    document.querySelector('.chotta-dhobi-center').style.display = 'block';
    document.querySelector('.washes-left').textContent = parseInt(document.querySelector('.washes-left').textContent) - 1;

}
function clothesSubmission(){
    document.querySelector('.chotta-dhobi-right').style.display = 'block';
    document.querySelector('.chotta-dhobi-center').style.display = 'none';
}

function changeColor() {
    const chottaDhobiCenter = document.querySelector('.chotta-dhobi-center');
    if (chottaDhobiCenter && getComputedStyle(chottaDhobiCenter).display === 'block') {
        const currentStatus = document.querySelector('.current-status');
        currentStatus.style.color = 'yellow'; 
        currentStatus.innerHTML = 'Collect Now!';
        // currentStatus.style.fontSize = '15px';
        currentStatus.style.borderColor = 'yellow';
        document.querySelector('.washing-status button').style.display = 'block';
    }
}

setTimeout(changeColor, 5000);


function updateDates() {
    const dateSpans = document.querySelectorAll('.date');
    let currentDate = new Date();

    for (let i = 0; i < dateSpans.length; i++) {
        currentDate.setDate(currentDate.getDate() - 7);
        const formattedDate = currentDate.toISOString().split('T')[0];
        dateSpans[i].textContent = formattedDate;
    }
}
window.onload = function() {
    updateDates();
};


