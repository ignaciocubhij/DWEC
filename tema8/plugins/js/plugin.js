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
                window.location.href = 'https://www.booking.com/hotel/es/behap-madrid-plaza-del-carmen.es.html?aid=373414&label=city-paris-Z0WLFipjvTf5FZGNoGHz5wS261482123013%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-17202801%3Alp1005452%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YRfRdUUL2hDP1vmbAwVMkcw-Share-82944C%401707841269&sid=2aa9d31070ad2ac61a9b428485014433&all_sr_blocks=550378301_363254161_2_0_0;checkin=2024-08-12;checkout=2024-08-14;dest_id=176;dest_type=district;dist=0;group_adults=2;group_children=0;hapos=1;highlighted_blocks=550378301_363254161_2_0_0;hpos=1;matching_block_id=550378301_363254161_2_0_0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=550378301_363254161_2_0_0__29146;srepoch=1708771293;srpvid=68a64b18ec960074;type=total;ucfs=1&#hotelTmpl';
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

    //Con la opción 'items' pero con más de una imagen
    $("#boton_test2").magnificPopup({
        items: [
            {
                src: "img/casa1.jpg",
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

    //Como inicializar un popup
    // De un HTML
    /* $('#abrir').magnificPopup({
        items: {
            src: '<div class="centrado">HTML</div>',
            type: 'inline'
        }
    }); */

    // De un elemento con ID #popup
    $('#abrir').magnificPopup({
      items: {
          src: '#centrado',
          type: 'inline'
      }
    }).css("display", "block");

    // De un objeto jQuery
    /* $('#abrir').magnificPopup({
      items: {
          src: $('<div class="centrado">jQuery</div>'),
          type: 'inline'
      }
    }); */

    // Abrir directamente con la API
    $.magnificPopup.open({
      items: {
        src: '<div class="centrado">BIENVENIDOS A NUESTRA INMOBILIARIA</div>', //Puede ser un string del HTML, un objeto jQuery o un selector de CSS
      }
    });

    //disableOn si la ventana es menor de la anchura lo abre
    $("#link").magnificPopup({
        disableOn: function() {
            if($(window).width() < 600 ) {
              return false;
            }
            return true;
          }
    });
});