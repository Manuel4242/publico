function modoNoche(){
    $('#cabecera').css('background', 'black');
    $('#cabecera-dolly').css('background', 'black');
    $('#subnav').css('background', 'black');
    $('#subnav-art').css('background', 'black');
    $('#myLog').css('background', 'black');
    $('body').css('background', 'black');
    $('.fila').css('background', 'black');
    $('*').css('color', 'white');
    $('#user').css('color', 'grey');
    $('#contraseña').css('color', 'grey');
    $('i').css('color', 'grey');
    $('select').css('color', 'grey');
    $('textarea').css('color', 'grey');
    $('input').css('border', 'black');
    $('input').css('background', '#f2f2f2');
    $('input').css('color', 'grey');
    $('.acordeon').css('background', 'black');
    $('.panel').css('background', 'black');
    $('.content h2').css('color', 'black');
    $('.content p').css('color', 'black');
    $('#logo a').css('color', 'royalblue');
    $('h2').css('color', 'royalblue');
    $('h3').css('color', 'royalblue');
    $('#texto-advertencia h2').css('color', 'white');
    
    $('#noche').css('display', 'none');
    $('#dia').css('display', 'block');
}

function modoDia() {
    location.reload();
}