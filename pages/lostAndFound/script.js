const userData = sessionStorage.getItem('userData');

function submitForm() {
    var form = document.getElementById("lostFoundForm");
    var formData = new FormData(form);

    var enteredValues = "<h2>Form Data:</h2><ul>";
    for (var pair of formData.entries()) {
        enteredValues += "<li><strong>" + pair[0] + ":</strong> " + pair[1] + "</li>";
    }
    enteredValues += "</ul>";

    document.getElementById("displayData").innerHTML = enteredValues;
}


if (userData && userData[0].length > 0) {    
    var loginStatusDiv = document.querySelector(".login-status");
    loginStatusDiv.innerHTML = `<acronym title="${userData}"><i class='fa-solid fa-user login-icon'></i></acronym>`;
}