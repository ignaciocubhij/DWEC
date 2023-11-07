const fruits = ["banana", "orange", "apple", "mango"];
const keys = fruits.keys();

let text = "";
for(let x of keys){
    text += x + "<br>";
}

console.log(text);