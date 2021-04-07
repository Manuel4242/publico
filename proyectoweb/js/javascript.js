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