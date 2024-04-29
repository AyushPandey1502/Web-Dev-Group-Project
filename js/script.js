const userData = sessionStorage.getItem('userData');

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
  
      // ===================== Nav Bar Start ===============================
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

  function scrollToCommunity() {
    var connectSection = document.getElementById('community');
    connectSection.scrollIntoView({ behavior: 'smooth' });
  }

  function scrollToTop() {
    var connectSection = document.getElementById('home');
    connectSection.scrollIntoView({ behavior: 'smooth' });
  }


  if (userData && userData[0].length > 0) {    
    var loginStatusDiv = document.querySelector(".login-status");
    loginStatusDiv.innerHTML = `<acronym title="${userData}"><i class='fa-solid fa-user login-icon'></i></acronym>`;
}
