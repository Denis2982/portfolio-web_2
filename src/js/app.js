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


//-----Portfolio--animate--------------------------------------------------

import DirectionReveal from './direction-reveal.js';

// Swing (Default)
const directionRevealSwing = DirectionReveal({
  selector: '.direction-reveal--demo-swing'
});


// Rotate (all options)
const directionRevealRotate = DirectionReveal({
  selector: '.direction-reveal--demo-rotate',
  itemSelector: '.direction-reveal__card',
  animationName: 'rotate',
  animationPostfixEnter: 'enter',
  animationPostfixLeave: 'leave',
  enableTouch: true,
  touchThreshold: 250
});


// Flip
const directionRevealFlip = DirectionReveal({
  selector: '.direction-reveal--demo-flip',
  animationName: 'flip'
});


// Slide 
const directionRevealSlide = DirectionReveal({
  selector: '.direction-reveal--demo-slide',
  animationName: 'slide'
});


// Slide & push
const directionRevealSlidePush = DirectionReveal({
  selector: '.direction-reveal--demo-slide-push',
  animationName: 'slide'
});


// Roll out
const directionRevealRollOut = DirectionReveal({
  selector: '.direction-reveal--demo-roll-out',
  animationName: 'roll-out'
});



// Add a listener to an item to monitor direction changes 

// document.querySelector('.direction-reveal--demo-swing .direction-reveal__card:first-child').addEventListener('directionChange', (event) => { 
//   console.log(`Action: ${event.detail.action} Direction: ${event.detail.direction}`);
// });

// let eventTargets = document.querySelectorAll('.direction-reveal--demo-swing .direction-reveal__card');
// eventTargets.forEach((item) => {
//   item.addEventListener('directionChange', (event) => { 
//     console.log(`Action: ${event.detail.action} Direction: ${event.detail.direction}`);
//     console.log(item);
//   });
// });

