document.getElementsByTagName('section')[0].style.color = localStorage.getItem('txtColor');
document.getElementsByTagName('section')[0].style.backgroundColor = localStorage.getItem('bgColor');

window.addEventListener('DOMContentLoaded', function () {
    function reloj() {
        var hora;
        var minuto;
        var segundos;
        var reloj = new Date();
        
        hora = reloj.getHours();
        minuto = reloj.getMinutes();
        segundos = reloj.getSeconds();
        
        document.getElementById('reloj').innerHTML = `${hora < 10 ? '0' + hora : hora}:${minuto < 10 ? '0' + minuto : minuto}:${segundos < 10 ? '0' + segundos : segundos}`;
    }
    
    setInterval(reloj, 1000);
    
    function fecha(){
        var dia;
        var mes;
        var año;
        var fecha = new Date();
        
        dia = fecha.getDate();
        mes = fecha.getMonth();
        año = fecha.getFullYear();
        
        document.getElementById('fecha').innerHTML = `${dia}/${mes+1}/${año}`;
    }
    setInterval(fecha, 1000);
    
    var divBat = document.createElement('article');
    var spanBat = document.createElement('span');
    spanBat.setAttribute('id', 'bateria');
    divBat.appendChild(spanBat);
    document.getElementsByTagName('section')[0].appendChild(divBat);
    
    var divIconBat = this.document.createElement('div');
    divIconBat.setAttribute('id', 'bateriaDiv');
    var porc = this.document.createElement('div');
    porc.setAttribute('id', 'porcentaje');
    divIconBat.appendChild(porc);
    divBat.appendChild(divIconBat);
    
    var battery = async () => {
        var bat =  await navigator.getBattery();
        this.document.getElementById('bateria').innerText = `Bateria: ${Math.floor(bat.level*100)}%`;
        this.document.getElementById('porcentaje').style.width = `${bat.level*100}px`;
        bat.level*100 < 20 ? this.document.getElementById('porcentaje').style.backgroundColor = 'red' : bat.level*100 < 50 ? this.document.getElementById('porcentaje').style.backgroundColor = 'yellow' : this.document.getElementById('porcentaje').style.backgroundColor = 'green';
        bat.charging ? this.document.getElementById('bateria').innerHTML += '<p>Cargando...</p>' : '';
    }
    
    this.setInterval(battery, 1000);
    
    var cgColor = document.getElementById('cgColor');
    cgColor.addEventListener('change', (e)=>{
        e.preventDefault();
        
        this.localStorage.setItem('bgColor', cgColor.value);
        document.getElementsByTagName('section')[0].style.backgroundColor = localStorage.getItem('bgColor');
    })
    
    var cgText = document.getElementById('cgText');
    cgText.addEventListener('change', (e)=>{
        e.preventDefault();
        
        this.localStorage.setItem('txtColor', cgText.value);
        document.getElementsByTagName('section')[0].style.color = localStorage.getItem('txtColor');
    })
})