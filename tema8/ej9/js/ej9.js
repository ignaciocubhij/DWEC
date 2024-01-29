$(document).ready(function() {
    $('#pequeña').click(function(){
        $('.noticia').each(function(index, elem) {
            $(elem).css('font-size', '3pt');
        })
    })
    $('#normal').click(function(){
        $('.noticia').each(function(index, elem) {
            $(elem).css('font-size', '12pt');
        })
    })
    $('#grande').click(function(){
        $('.noticia').each(function(index, elem) {
            $(elem).css('font-size', '30pt');
        })
    })
})