const a = "Hola ";

function global(){
    const b = "Que";

    function local() {
        const c = " tal?";
        return a + b + c;
    }

    return local;
}

console.log(global());
console.log(global()());

//segundo ejemplo
const miContador = (function(){
    let contador = 0;

    function incrementar(){
        return ++contador;
    }
    function decrementar(){
        return --contador;
    }
    function valor(){
        return contador;
    }

    return {
        incrementar,
        decrementar,
        valor
    }
})();

console.log(miContador.valor());
console.log(miContador.incrementar());
console.log(miContador.incrementar());
console.log(miContador.incrementar());
console.log(miContador.decrementar());