//charCodeAt
let codigos = [55357, 56359];
let emoji =  "🐧";

for(let i = 0; i < emoji.length; i++){
    codigos.push(emoji.charCodeAt(i));
}

console.log(codigos);

//clz32
var x = 1;
var res = "0".repeat(Math.clz32(x)) + x.toString(2);
console.log(res);

var x2 = Math.random();
x2 = x2 * 6;
x2 = Math.floor(x2);

console.log(x2);

function randomIntFromInterval(max, min){
    return ~~(Math.random() * (max - min + 1 ) + min);
}

console.log(randomIntFromInterval(2, 6));