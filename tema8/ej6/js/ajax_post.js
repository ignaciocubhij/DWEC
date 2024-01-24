/* función para crear el objeto AJAX*/
function nuevoAjax() {
  var xhttp = false;
  try {
    // Creacion del objeto AJAX para navegadores no IE
    xhttp = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
      // Creacion del objet AJAX para IE
      xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
      xhttp = false;
    }
  }
  if (!xhttp && typeof XMLHttpRequest != "undefined") {
    xhttp = new XMLHttpRequest();
  }

  return xhttp;
}