/* 
JavaScript / jQuery
web o pagina: Proyecto Final
autor: Manuel Carrillo
fecha: Abril de 2021
*/

//Prueba
function comprobar() {
  if (sessionStorage.getItem("usuario").length > 0) {
    document.getElementById("nav-login").style.display = "none";
    document.getElementById("nav-logout").style.display = "block";
  }
}

document.getElementById("mensaje").innerHTML = sessionStorage.getItem("usuario");

function ingresar() {
  if (typeof (Storage) !== "undefined") {
    // Almacena un valor usando el método setItem del objeto localStorage
    var x = document.forms["formularioIngreso"]["usuario"].value;
    sessionStorage.setItem("usuario", x);
  } else {
    alert("Este navegador no soporta web storage...");
  }
  location.reload();
  return false;
}

function salir() {
  if (typeof (Storage) !== "undefined") {
    sessionStorage.removeItem("usuario");
    document.getElementById("mensaje").innerHTML = "";
  } else {
    alert("Este navegador no soporta web storage...");
  }
  location.reload();
  return false;
}

function darAcceso() {
  if (sessionStorage.getItem("usuario").length > 0) {
    document.getElementById("advertencia").style.display = "none";
    document.getElementById("contenido-tienda").style.display = "block";
  }
}

window.onload=function lanzadera(){
  comprobar();
  darAcceso();
}



//Fin de prueba



//Realiza el efecto de aparición al hacer scroll
window.addEventListener("scroll", aparecer);

function aparecer() {
  var reveals = document.querySelectorAll(".aparecer");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("aparecer-resultado");
    }
  }
}

//Acordeón
var acc = document.getElementsByClassName("acordeon");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

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


//Slider
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
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//Bloque videos
var numeroVideo = 1;
mostrarVideo(numeroVideo);

function videoActual(n) {
  mostrarVideo(numeroVideo = n);
}

function mostrarVideo(n) {
  var i;
  var slides = document.getElementsByClassName("slider-video");
  var dots = document.getElementsByClassName("lista-video img");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { numeroVideo = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[numeroVideo - 1].style.display = "block";
  dots[numeroVideo - 1].className += " active";
}
