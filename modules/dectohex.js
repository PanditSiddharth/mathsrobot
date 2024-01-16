// Decimal to Hexadecimal conversion with steps shown 

function hex(ele){
switch(ele){
case 10: ele = "A"; break;
case 11: ele = "B"; break;
case 12: ele = "C"; break;
case 13: ele = "D"; break;
case 14: ele = "E"; break;
case 15: ele = "F"; break;
}
return ele;
}


function frac(frk) {
  if (frk === 0) {
    return 0;
  }
  
  console.log("\nNow multiplying fractional part by 16");
  
  let i = 0;
  let hex = "";
  
  while (frk != 0 && i < 7) {
    console.log(frk + " x 16   integer " + Math.floor(frk * 16));
    
    frk = frk * 16;
    let k = Math.floor(frk);
    hex += k;
    frk = (frk - k).toFixed(5);
    i++;
  }
  
  return hex;
}

function integer(intgr) {
  if (intgr < 1) {
    return 0;
  }

  console.log("Now dividing integer part by 16: ");
  let temp = "";
  
let arr1 = []
// let arr2 = []
let i = 0;
  while (intgr > 0) {
let hx = hex(intgr % 16)
    console.log(intgr + "/16    remainder " + hx);
    arr1[i++] = hx;
    intgr = Math.floor(intgr / 16);
  }

  const reversedStr = arr1.reverse().join("");
  return reversedStr;
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter decimal number: ', (input) => {
  let dcml = input;
let intgr = Math.floor(dcml);
let frk = (dcml - intgr).toFixed(6);

for(let i = 0; i < (dcml + "").length; i++){
if(!(/[0-9\.]/g).test((dcml + '')[i]))
      return console.log("❌ " + dcml + " is not a correct decimal number");
}

console.log("Given decimal " + dcml + "\n");
if (frk == 0) {
  console.log("\nHexadecimal is " + integer(intgr));
} else {
  console.log("First we divide this number into two parts: integer and fractional part.\n" + dcml + " = " + intgr + " + " + frk + "\n");

  console.log("\nAfter adding both parts:\nHexadecimal is " + integer(intgr) + (frk != 0 ? ("." + frac(frk)).replace(/0*$/g, "") : ""));
}

rl.close();
}); // @jscode0