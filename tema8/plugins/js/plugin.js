$(document).ready(function () {
    //Hay tres formas de inicializar magnificPopup

    //De un elemento HTML
    $("#test").magnificPopup({
        type: "image",
        callbacks: {
            open: function () {
                console.log('Abierto');
            },
            close: () => {
                alert('Chao');
            }
        }
    });

    //De un grupo de elementos de un mismo padre
    $(".contenedor").magnificPopup({
        delegate: "a", //Selector de los hijos
        gallery: {
            enabled: true
        },
        type: "image",
    });

    //Con la opción 'items'
    $("#boton_test").magnificPopup({
        items: {
            src: "img/hoja.jpg"
        },
        type: "image"
    });

    //Con la opción 'items' pero con más de una imagen
    $("#boton_test2").magnificPopup({
        items: [
            {
                src: "img/hoja.jpg",
                type: "image"
            },
            {
                src: "<div id='centro'>Elemento creado de forma dinámica</div>",
                type: "inline"
            },
            {
                src: "#centrado",
                type: "inline"
            },
            {
                src: "https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&hl=en&t=v&hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom",
                type: "iframe"
            },
        ],
        gallery: {
            enabled: true
        },
        type: "image"
    })

    //Como poner el path de cualquier elemento

    //Directamente en el href de un enlace

    //Con data-mfp-src, que es un atributo que pones en un enlace

    //Con la opción de items con el atributo src

    //Abrir un popup de un boton ya creado en el html
    $('.open-popup-link').magnificPopup({
        type: 'inline',
    }).css("align", "center");

    //Como inicializar un popup
    // De un HTML
    /* $('#abrir').magnificPopup({
        items: {
            src: '<div class="centrado">HTML</div>',
            type: 'inline'
        }
      }); */

    // De un elemento con ID #popup
    /* $('#abrir').magnificPopup({
      items: {
          src: '#centrado',
          type: 'inline'
      }
    }); */

    // De un objeto jQuery
    /* $('#abrir').magnificPopup({
      items: {
          src: $('<div class="centrado">jQuery</div>'),
          type: 'inline'
      }
    }); */

    // Abrir directamente con la API
    /* $.magnificPopup.open({
      items: {
        src: '<div class="centrado">API</div>', //Puede ser un string del HTML, un objeto jQuery o un selector de CSS
      }
    }); */

    //También puedo hacer peticiones ajax

    $('.ajax_link').magnificPopup({
        type: 'ajax'
    });

    //Opciones
    //disableOn
    $("#link").magnificPopup({
        disableOn: function() {
            if( $(window).width() < 600 ) {
              return false;
            }
            return true;
          }
    });

    //key
    //preloader
    //mainClass

    $('#galeria').magnificPopup({
        delegate: "a",
        gallery: {
            enabled: true
        },
        type: "image",
    })
});