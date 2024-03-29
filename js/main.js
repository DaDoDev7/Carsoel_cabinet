// AOS

AOS.init();

//Swiper

const swiper = new Swiper('.swiper', {

  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

// barra navigazione che cambia allo scroll

var halfWindow = window.innerHeight / 20;

var lastScroll = 0;
var headerNav = document.querySelector("nav");

window.addEventListener("scroll", function(){
    var scrolled = window.scrollY;
    if(scrolled >= halfWindow) {
        headerNav.classList.add('active');
        
    } else {
        headerNav.classList.remove('active');
    }
    lastScroll = scrolled;
});


// SVG animation :D

var path = document.querySelector('#path');
var pathLength = path.getTotalLength();
path.style.strokeDasharray = pathLength + ' ' + pathLength;
path.style.strokeDashoffset = pathLength;


window.addEventListener("scroll", function(e) {
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    var drawLength = pathLength * scrollPercentage;
    path.style.strokeDashoffset = pathLength - drawLength;
    
  });


//LOADER ANIMATION

var loaderShown = document.cookie.includes('loaderShown=true');

window.addEventListener('load', function() {
  var loader = document.querySelector('.loader_wrapper');
  if (loader) {
    setTimeout(function() {
      loader.classList.add('fade');
      setTimeout(function() {
        loader.style.display = 'none';
      }, 1000); 
    }, 2600);
  }
});


//nav class  darken

window.addEventListener('scroll', function() {
  var cardItems = document.querySelectorAll('.card');
  var navLinks = document.querySelectorAll('.navlinks');
  var currentCardIndex = 0;
  
  // determina l'indice dell'ultima carta visibile
  for (var i = 0; i < cardItems.length; i++) {
    var bounding = cardItems[i].getBoundingClientRect();
    if (bounding.top <= window.innerHeight && bounding.bottom >= 0) {
      currentCardIndex = i;
    }
  }

  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove('darken');
  }
   navLinks[currentCardIndex].classList.add('darken');
});


//scroll top


var mybutton = document.getElementById("myBtn");
var lastScrollTop = 0;

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll verso il basso
    mybutton.style.opacity = '1';
    mybutton.style.display = "block";
  
  } else {
    // Scroll verso l'alto
    mybutton.style.opacity = '0';
    mybutton.style.display = "none";
  }

  lastScrollTop = scrollTop;
});

mybutton.addEventListener('click', function() {
  scrollToTop(200);
});

function scrollToTop(duration) {
  var start = window.pageYOffset;
  var startTime = performance.now();

  function animateScroll(timestamp) {
    var currentTime = timestamp - startTime;
    var progress = Math.min(currentTime / duration, 1);

    window.scrollTo(0, start * (1 - progress));

    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    }
  }

  window.requestAnimationFrame(animateScroll);
}


//scroll header disappear


var scrollArrow = document.querySelector('.scrollarrow');

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;
  var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  if (scrollPosition > 0.5 * viewportHeight) {
    scrollArrow.style.opacity = '0';
  } else {
    scrollArrow.style.opacity = '1';
  }
});

