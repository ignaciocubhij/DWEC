$(document).ready(function(){
    $('#p1').addClass('destacado').show('slow');

    $('ol li').each(function(index, element){
        console.log('El elemento con el indice ' + index + ' contiene ' + $(element).text());
    })
})