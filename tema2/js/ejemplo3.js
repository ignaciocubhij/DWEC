do {
    var n1 = parseInt(window.prompt("Introduce el nÃºmero 1: ", 0));
} while (isNaN(n1) || n1 < 0);

do {
    var n2 = parseInt(window.prompt("Introduce el nÃºmero 2: ", 0));
} while (isNaN(n2) || n2 < 0);

do {
    var n3 = parseInt(window.prompt("Introduce el nÃºmero 3: ", 0));
} while (isNaN(n3) || n3 < 0);

do {
    var n4 = parseInt(window.prompt("Introduce el nÃºmero 4: ", 0));
} while (isNaN(n4) || n4 < 0);

do {
    var n5 = parseInt(window.prompt("Introduce el nÃºmero 5: ", 0));
} while (isNaN(n5) || n5 < 0);

for (let i = 0; i<4; i++) {
    let aux = 0;
    if (n1>n2) {
        aux = n2;
        n2 = n1;
        n1 = aux;
    }
    if (n2>n3) {
        aux = n3;
        n3 = n2;
        n2 = aux;
    }
    if (n3>n4) {
        aux = n4;
        n4 = n3;
        n3 = aux;
    }
    if (n4>n5) {
        aux = n5;
        n5 = n4;
        n4 = aux;
    }
}

window.alert(n1);
window.alert(n2);
window.alert(n3);
window.alert(n4);
window.alert(n5);