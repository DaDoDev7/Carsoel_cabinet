

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


// Make very long dashes (the length of the path itself)
path.style.strokeDasharray = pathLength + ' ' + pathLength;

// Offset the dashes so the it appears hidden entirely
path.style.strokeDashoffset = pathLength;


window.addEventListener("scroll", function(e) {
 
    // What % down is it? 
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
      
    // Length to offset the dashes
    var drawLength = pathLength * scrollPercentage;
    
    // Draw in reverse
    path.style.strokeDashoffset = pathLength - drawLength;
    
  });


  // Aggiungi un listener di eventi "click" a tutti i link di ancoraggio nella navbar
var links = document.querySelectorAll('.navlinks');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function() {
    // Rimuovi la classe "visible" dall'elemento desiderato
    var targetId = this.getAttribute('href').substring(1);
    var targetElement = document.getElementById(targetId);
    targetElement.classList.remove('active');
  });
}

//LOADER ANIMATION

window.addEventListener('load', function() {
  var loader = document.querySelector('.loader');
  setTimeout(function() {
    loader.classList.add('fade');
    setTimeout(function() {
      loader.style.display = 'none';
    }, 1000); 
  }, 4000);
});