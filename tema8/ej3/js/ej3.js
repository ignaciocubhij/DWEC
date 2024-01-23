$(document).ready(function(){
    $('ul li').each(function(i, elem){
        $(elem).click(function(){
            $(elem).css('display', 'none');
        })
    })

    //pares
    $('table tr:nth-child(even)').click(function(){
        $(this).css('background-color', 'yellow');
    })
    
    //impares
    $('table tr:nth-child(odd)').click(function(){
        $(this).css('background-color', 'red');
    })
})