$(document).ready(function(){
    $('button').click(function(){
        $('a').each(function(index, elem){
            if ($(elem).attr('href').slice(-4) == '.com') {
                $(elem).css('background-color', 'red');
            }
        })
    })
})