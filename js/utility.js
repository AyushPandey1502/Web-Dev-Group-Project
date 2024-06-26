let isLogined = false;
let userName = "";

let users = [
  { name: 'Ayush Pandey', email: 'ayush.pandey2022b@vitstudent.ac.in', password: 'Ayush@123' },
  { name: 'Ayush Pandey', email: 'ayush.pandey2022a@vitstudent.ac.in', password: 'Ayush@Pandey' },
  { name: 'Shashwat Pathak', email: 'shaswat.pathak2022@vitstudent.ac.in', password: 'Shaswat@123' }
];

function addUser(name, email, password) {
  users.push({ name, email, password });
}

function getUserByEmail(email) {
  return users.find(user => user.email === email);
}

function getUserByName(name) {
  return users.find(user => user.name === name);
}

function isEmailRegistered(email) {
  return users.some(user => user.email === email);
}

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const sectionContainer = document.querySelector('.section-container');


registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
  toggleBlur();
});

iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
  toggleBlur();
});

function toggleBlur() {
  sectionContainer.classList.toggle('blur');
}

iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
  document.querySelector('.section-container').classList.remove('blur');
});

// Function to handle form submission
function handleLoginFormSubmit() {
  document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    email = document.getElementById("email").value;
    userPwd = document.getElementById("password").value;
    const user = getUserByEmail(email);
    if (user) {
      if (user.password === userPwd) {
        const { name } = user;
        alert(`Welcome ${name}!!`);
        userName = name;
        var loginStatusDiv = document.querySelector(".login-status");
        loginStatusDiv.innerHTML = `<acronym title=${name}><i class='fa-solid fa-user fa-beat login-icon'></i></acronym>`;
        isLogined = true;
        iconClose.click();
        // localStorage.setItem('userData', name);
        // setUserDataInCookie(name);
        sessionStorage.setItem('userData', name);
      } else {
        alert("Incorrect Password");
      }
    } else {
      alert("User not Found !! Try Signing In");
    }
  });
}

handleLoginFormSubmit();


function handleRegisterFormSubmit() {
  document.getElementById("signUp-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.querySelector('#user-name').value;
    const email = document.querySelector('#user-email').value;
    const password = document.querySelector('#user-pwd').value;
    const user = getUserByEmail(email);
    const agreedToTerms = document.querySelector('#signUp-check').checked;

    if (!agreedToTerms) {
      alert('Please agree to the terms and conditions.');
      return;

    } else {
      if (isEmailRegistered(email)) {
        alert("Email already registered. Try logging In !!");
      } else {
        addUser(username, email, password);
        alert('Registration successful!');
        loginLink.click();
      }
    }

  });
}

handleRegisterFormSubmit();



// ======================== NavBar ========================

// function to add Event Listner on navTogglerBtn for aside section 
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside"),
  mainContent = document.querySelector(".section-container");

navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

mainContent.addEventListener("click", () => {
  if (aside.classList.contains("open")) {
    asideSectionTogglerBtn();
  }
});

// function to toggle the visibility of aside section
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSelection; i++) {
    allSection[i].classList.toggle("open");
  }
}


document.addEventListener("DOMContentLoaded", function () {
  const submenuLinks = document.querySelectorAll(".links .submenu a");
  submenuLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetUrl = this.getAttribute("href");
      window.location.href = targetUrl;
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const submenu = document.querySelector('.submenu');

  function removeSubmenu() {
      if(window.innerWidth < 1199 && submenu) {
          submenu.style.display = 'none';
      }
  }
  window.addEventListener('resize', function() {
      removeSubmenu();
  });
});

