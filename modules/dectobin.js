// Decimal to binary conversion with steps shown 

function frac(frk) {
  if (frk === 0) {
    return 0;
  }
  
  console.log("\nNow multiplying fractional part by 2");
  
  let i = 0;
  let binary = "";
  
  while (frk != 0 && i < 7) {
    console.log(frk + " x 2   integer " + Math.floor(frk * 2));
    
    frk = frk * 2;
    let k = Math.floor(frk);
    binary += k;
    frk = (frk - k).toFixed(5);
    i++;
  }
  
  return binary;
}

function integer(intgr) {
  if (intgr < 1) {
    return 0;
  }

  console.log("Now dividing integer part by 2: ");
  let temp = "";
  
  while (intgr > 0) {
    console.log(intgr + "/2    remainder " + intgr % 2);
    temp += intgr % 2;
    intgr = Math.floor(intgr / 2);
  }
  
  const reversedStr = temp.split("").reverse().join("");
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
console.log("Given decimal " + dcml + "\n");
if (frk == 0) {
  console.log("\nBinary is " + integer(intgr));
} else {
  console.log("First we divide this number into two parts: integer and fractional part.\n" + dcml + " = " + intgr + " + " + frk + "\n");

  console.log("\nAfter adding both parts:\nBinary is " + integer(intgr) + (frk != 0 ? ("." + frac(frk)) : ""));
}

rl.close();
});

// @jsCode0