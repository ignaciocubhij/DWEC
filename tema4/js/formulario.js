window.addEventListener('DOMContentLoaded', function () {

    var ventana;
    function CrearVentana() {
        var opciones = "left=500,top=100,";
        opciones = opciones + "width=" + document.getElementById("anchoID").value + ",";
        opciones = opciones + "height=" + document.getElementById("altoID").value;
        ventana = window.open("", "nom_ventana1", opciones); //crea la ventana
        ventana.document.write("ESTA ES LA VENTANA QUE SE HA CREADO");
        ventana.document.write("<BR>" + "Dirección de la página que ha abierto esta ventana:");
        ventana.document.write("<BR>" + ventana.opener.location);
    }

    function CerrarVentana() {
        if (ventana && !ventana.closed)
            ventana.close(); //cierra la ventana creada.
        // También con self.close() o window.close
    }

    this.document.getElementById('bcrearID').addEventListener('click', CrearVentana);
    this.document.getElementById('bcerrarID').addEventListener('click', CerrarVentana);

})