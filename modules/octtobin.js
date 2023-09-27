// Octal to binary conversion with steps 

function loop(oct){
let bin = ""
for(let i = 0; i < oct.length; i++){

let a = parseInt(oct[i], 8).toString(2).padStart(3, '0')
console.log( oct[i] + " = " + a);
bin += a
}
return bin
}


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter Octal number: ', (input) => {

let oct = "" + input
for(let i = 0; i < oct.length; i++){
if(oct[i] > '7' || oct[i] < '0')
if(oct[i] != '.')
return console.log(oct + " is not a correct octal num")
}


console.log( "Given octal number: " + oct +"\n");
if(oct.includes(".")){
let ar = oct.split(".")
console.log( "Equivalent binary numbers for each octal number: ");

console.log( "\nNow After placing each binary in sequence: \n\nOctal " + oct + " in binary is " + loop(ar[0]) + "." + loop(ar[1]));
} else {
console.log( "Equivalent binary numbers for each octal number: ");

console.log( "\nNow After placing each binary in sequence: \n\nOctal " + oct + " in binary is " + loop(oct));
}

rl.close();
}) // @JsCode0