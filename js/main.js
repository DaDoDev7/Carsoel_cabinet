

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

window.addEventListener('load', function() {
  var loader = document.querySelector('.loader_wrapper');
  setTimeout(function() {
    loader.classList.add('fade');
    setTimeout(function() {
      loader.style.display = 'none';
    }, 1000); 
  }, 3600);
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
  
  // rimuovi la classe 'darken' da tutte le navlinks
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove('darken');
  }
  
  // aggiungi la classe 'darken' all'elemento di navigazione corrispondente all'ultima carta visibile
  navLinks[currentCardIndex].classList.add('darken');
});