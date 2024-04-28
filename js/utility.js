let users = [
  { name: 'Ayush Pandey', email: 'ayush.pandey2022b@vitstudent.ac.in', password: 'Ayush@123' }
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


let userName = "Ayush Pandey";
let email = "ayush.pandey2022b@vitstudent.ac.in";

let typed = new Typed("#typing", {
  strings: ["", "Book Share", "SoapSync", "Cab Share", "Lost & Found"],
  typeSpeed: 150,
  backSpeed: 60,
  loop: true
});

// ===================== Nav Bar Start =====================
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.links li a');
  const sections = document.querySelectorAll('section');

  function makeLinkActive() {
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight - 50) {
        currentSectionId = section.id;
      }
    });

    navLinks.forEach(link => {
      const targetId = link.getAttribute('href').substring(1);
      if (targetId === currentSectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      navLinks.forEach(function (link) {
        link.classList.remove('active');
      });
      this.classList.add('active');

      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const offset = 40;
        const targetOffset = targetSection.offsetTop - offset;

        window.scrollTo({
          top: targetOffset,
          behavior: 'smooth'
        });
      }
    });
  });

  window.addEventListener('scroll', makeLinkActive);
});
 
// ===================== Nav Bar Ends ===============================

function toggleBlur() {
  sectionContainer.classList.toggle('blur');
}

iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
  toggleBlur();
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
              var loginStatusDiv = document.querySelector(".login-status");
              loginStatusDiv.innerHTML = `<acronym title=${name}><i class='fa-solid fa-user fa-beat login-icon'></i></acronym>`;
              iconClose.click();
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




