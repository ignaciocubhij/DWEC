let ejemploArray = new Array();
ejemploArray[0] = "verde";
ejemploArray[1] = "Argentina";
ejemploArray[2] = "mate";

console.log("La longitud de ejemploArray es " + ejemploArray.length);

let ejemploPropiedades = new Array();
ejemploPropiedades["color"] = "verde";
ejemploPropiedades["pais"] = "Argentina";
ejemploPropiedades["bebida"] = "mate";

console.log("La longitud de ejemploPropiedades es " +  ejemploPropiedades.length);
console.log("La propiedad color vale " + ejemploPropiedades["color"]);
console.log("La propiedad color vale " + ejemploPropiedades.color);
console.log("El índice cero del array vale " + ejemploPropiedades[0]);

for (let i = 0; i < ejemploArray.length; i++) {
    console.log("Valor en ejemploArray: " + ejemploArray[i]);
}
for (let i = 0; i < ejemploPropiedades.length; i++) {
    console.log("Valor en ejemploPropiedades " + ejemploPropiedades[i]);
}
let msg = "";
for (nombrePropiedad in ejemploPropiedades) {
    msg += ` Propiedad: ${nombrePropiedad}. Valor propiedad es:
${ejemploPropiedades[nombrePropiedad]}\n`;
}