console.log($('p').parent('div'));

$('#boton1').bind('click', function () {
    console.log('funcion 1');
})
$('#boton2').bind('click', function () {
    console.log('funcion 2');
})
$('#boton3').bind('click', function () {
    console.log('funcion 3');
})
$('button').unbind('click');