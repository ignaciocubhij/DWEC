function Reloj(h, m, s) {
    this.hora = h;
    this.minuto = m;
    this.segundo = s;
    this.setHora = fun1;
    this.mostrarHora = fun2;
}

function fun1(h, m, s) {
    if (arguments.length == 3) {
        this.hora = h;
        this.minuto = m;
        this.segundo = s;
    }
    else if (arguments.length == 1) {
        this.hora = h;
    }
}

function fun2() {
    window.alert(this.hora + " : " + this.minuto + " : " + this.segundo);
}

var r1 = new Reloj(21, 30, 15);

r1.setHora(22);
console.log(r1.mostrarHora());