document.addEventListener("DOMContentLoaded", iniciar, false);

var banner = new Array("img/imagen1.jpg", "img/imagen2.jpg", "img/imagen3.jpg");
var actual = 0;
var nImagenes = banner.length;

function iniciar(){
    rotate();
}

function rotate() {
  if (document.images) {
    document.getElementById('imgBanner').src = banner[actual];
    actual = (actual + 1) % nImagenes;
  }
  setTimeout(rotate, 1000);
}