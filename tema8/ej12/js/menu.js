$(document).ready(function () {
    $("div.menu_punto").hide();
    $("p.menu_capitulo").click(function () {
        $(this).next("div.menu_punto").slideDown(300)
            .siblings("div.menu_punto").slideUp("slow");
    });
});