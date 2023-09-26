import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

//------Smooth-scroll-------------------------------------------------------
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();    
    const blockID = anchor.getAttribute('href')    
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

//------Fixed-Navbar-on-Scroll-------------------------------------------------
window.addEventListener("scroll", function() {
  let header = this.document.querySelector("header");
  header.classList.toggle("_sticky", this.window.scrollY > 0);
})

//------Active-menu------------------------------------------------------------
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry =>{
    if (entry.isIntersecting) {
      document.querySelectorAll('.nav__list-link').forEach((link) => {
        let id = link.getAttribute('href').replace('#', '');
        if (id === entry.target.id) {
          link.classList.add('_active');          
        } else {
          link.classList.remove('_active');
        }
      })
    }
  }))
}, {
  threshold: 0.5
});

document.querySelectorAll('section').forEach(section => {observer.observe(section)});

//------Form-------------------------------------------------------------------
import Swal from 'sweetalert2';

const form = document.querySelector('.form');
form.addEventListener('submit', formSend);

async function formSend(e) {
  e.preventDefault();
  form.classList.add('_sending');
  let formData = new FormData(form);
    
  let response = await fetch('sendmail/sendmail.php', {
    method: 'POST',
    body: formData,
    mode: 'no-cors'
  });

  if (response.ok){
    swalOk();
    // let result = await response.json();
    // alert(result.message);
    // formPreview.innerHTML = '';
    form.reset();
    form.classList.remove('_sending');
  } else {
    swalError();
    form.classList.remove('_sending');
  }
}   

function swalOk() {
  Swal.fire({    
    icon: 'success',
    iconColor: 'green',
    title: false,
    text: 'Send!',
    showConfirmButton: false,
    timer: 3000,
    borderRadius: '10px',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
}  

function swalError() {
  Swal.fire({
    icon: 'error',
    iconColor: 'red',
    title: false,
    text: 'Error send!',     
    timer: 3000,    
    borderRadius: '10px',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
}  

// -----Burger--Menu----------------------------------
let menuBtn = document.querySelector(".nav__burger");
let menu = document.querySelector(".nav__list");
let overflow = document.getElementById("html");
let about = document.querySelector(".about");
menuBtn.addEventListener("click", function () {
  menu.classList.toggle("nav__list--open");
  menuBtn.classList.toggle("nav__burger--open");
  overflow.classList.toggle("overflow-y-hidden");
  about.classList.toggle("about--opacity");
});


//-----Portfolio--animate--and--Swiper----------------------------------------------
import Swiper from 'swiper/bundle';

const swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});

// -----AOS----------------------------------------------------------------------------------

AOS.init();