/* 
JavaScript / jQuery
web o pagina: Proyecto Final
autor: Manuel Carrillo
fecha: Abril de 2021
*/

//Oculta la cabecera al bajar la pagina 
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("cabecera").style.top = "0";
    } else {
        document.getElementById("cabecera").style.top = "-130px";
    }
    prevScrollpos = currentScrollPos;
}

//Muestra y oculta el menú desplegable
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

//Muestra y oculta el login desplegable
function openLog() {
    document.getElementById("myLog").style.width = "100%";
}

function closeLog() {
    document.getElementById("myLog").style.width = "0%";
}


//Prueba Slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}