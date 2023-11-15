var reg = /(?=.*[a-z])(?=.*[A-Z])(?=.*\D){2,}/; //solo puede haber una mayuscula, una minuscula y al menos dos caracteres no digitos
var reg2 = /(?=.*[a-z])(?=.*[A-Z])(?!.*\d){2,}/; //igual que la anterior pero prohibe al menos dos digitos (solo puede haber 1)

var prueba = reg.test('Hola 1');
var prueba2 = reg2.test('Passw0rd!');

console.log(prueba);
console.log(prueba2);