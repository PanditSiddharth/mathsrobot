// Hexadecimal to binary conversion with steps 
function loop(hex){
  let bin = "";
  for(let i = 0; i < hex.length; i++){
    let a = parseInt(hex[i], 16).toString(2).padStart(4, '0');
    console.log( hex[i] + " = " + a);
    bin += a;
  }
  return bin
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter Hexadecimal number: ', (input) => {
  let hex = "" + input;
  for(let i = 0; i < hex.length; i++){
    if(!(/[0-9A-Fa-f\.]/g).test(hex[i]))
      return console.log("❌ " + hex + " is not a correct hexadecimal number");
  }
if(!hex.includes(".")){
  console.log("Given hexadecimal number: " + hex +"\n");

  console.log("Equivalent binary numbers for each hexadecimal number: ");
  console.log("\nNow after placing each binary in sequence: \n\nHexadecimal " + hex + " in binary is " + loop(hex).replace(/^0*/, ""));
} else {
let a = hex.split(".")
  console.log("Given hexadecimal number: " + hex +"\n");

  console.log("Equivalent binary numbers for each hexadecimal number: ");

let  l = loop(a[0]) + "." + loop(a[1])

  console.log("\nNow after placing each binary in sequence: \n" + l +"\n\nHexadecimal " + hex + " in binary is " + l.replace(/(^0*|0*$)/g, "") )
}
  rl.close();
});