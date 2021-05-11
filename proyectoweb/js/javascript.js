/* 
JavaScript / jQuery
web o pagina: Proyecto Final
autor: Manuel Carrillo
fecha: Abril de 2021
*/

//Funciones de Login
//Función que comprueba si hay un usuario conectado, mostrando el icono de login o logout según el caso
function comprobar() {
  if (sessionStorage.getItem("usuario").length > 0) {
    document.getElementById("nav-login").style.display = "none";
    document.getElementById("nav-logout").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("logout").style.display = "block";
  }
}

//Muestra en el bloque de mensaje el nombre del usuario conectado
document.getElementById("mensaje").innerHTML = sessionStorage.getItem("usuario");

//Función que extrae del formulario de ingreso el nombre y la contraseña del usuario
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

//Prueba
function leerXML() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      miFuncion(this);
    }
  };
  xhr.open("GET", "registrados.xml", true);
  xhr.send();
}

function miFuncion(xml) {
  var i;
  var nombre = document.forms["formularioIngreso"]["usuario"].value;
  var contrasenia = document.forms["formularioIngreso"]["contraseña"].value;
  var xmlDoc = xml.responseXML;
  var x = xmlDoc.getElementsByTagName("usuario");
  validado = false;

  for (i = 0; i < x.length; i++) {
    if (x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue == nombre) {
      if (x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue == contrasenia) {
        validado = true;
        break;
      }
    }
  }

  if (validado == true) {
    sessionStorage.setItem("usuario", x);
    location.reload();
  } else {
    window.alert("Usuario o contraseña incorrectos");
  }
}
//Fin de prueba

//Función que desconecta al usuario, vaciando la variable del session storage
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

//Función que comprueba si hay un usuario conectado para mostrar el contenido de la tienda
function darAcceso() {
  if (sessionStorage.getItem("usuario").length > 0) {
    document.getElementById("advertencia").style.display = "none";
    document.getElementById("contenido-tienda").style.display = "block";
  }
}

//Lanza las funciones de comprobación al cargar la página
window.onload = function lanzadera() {
  comprobar();
  darAcceso();
}

//Funciones de la página
//Realiza el efecto de aparición al hacer scroll
window.addEventListener("scroll", aparecer);

//Funcion que, al llegar al nivel de visualización del objeto, añade una clase de estilo haciendolo aparecer con una animación
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

//Acordeón de la línea de tiempo
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

//Función que oculta y muestra la cabecera
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  //Muestra la cabecera si detecta scroll hacia arriba
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("cabecera").style.top = "0";
  } else {
    //Oculta la cabecera si detecta scroll hacia abajo
    document.getElementById("cabecera").style.top = "-130px";
  }
  prevScrollpos = currentScrollPos;
}

//Muestra y oculta el menú desplegable
//Función que abre el menú desplegable
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

//Función que cierra el menú desplegable
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

//Muestra y oculta el login desplegable
//Función que abre el login desplegable
function openLog() {
  document.getElementById("myLog").style.width = "100%";
}

//Función que cierra el login desplegable
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
  //Controla los valores extremos
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
//Función del slider adaptada para mostrar los vídeos de la página principal
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
