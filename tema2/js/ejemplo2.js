var radio = prompt('introduce un numero');
var base = prompt('introduce la base');

if (!isNaN(parseInt(radio, base))) {
    document.write(parseInt(radio, base));
} else {
    alert(`no se puede parsear`);
}