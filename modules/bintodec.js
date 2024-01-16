function btod(ins, frs = null) {
  let inn = ins.map(x => parseInt(x, 2));

  console.log("\nNow multiply each number with 2^[ i ]\nHere i is according to value of that place\n");

  let len = ins.length;
  let midstr = "";
  for (let i = 0; i < len; i++) {
    midstr += " + (" + ins[i] + " × 2^" + (len - 1 - i) + ")"
  }
  midstr = midstr.substring(2)

  if (frs) {
    let frn = frs.map(x => parseInt(x, 2));

    for (let i = 1; i < frs.length +1; i++) {
      midstr += " + (" + frs[i -1] + " × 2^[-" + (i) + "])"
    }

    console.log("= " + midstr);
    midstr = ""

    for (let i = 0; i < len; i++) {
      midstr += " + " + ins[i] + " × " + ( 2 **(len - 1 - i))
    }
     
    for (let i = 1; i < frs.length +1; i++) {
      midstr += " + " + frs[i -1] + " × " + (2 **(i - i*2)) 
    }

    console.log("\n= " + midstr.substring(2))
    midstr = ""

    for (let i = 0; i < len; i++) {
      midstr += " + " + (inn[i] * ( 2 **(len - 1 - i)))
    }
     
    for (let i = 1; i < frs.length +1; i++) {
      midstr += " + " + (frn[i -1] * (2 **(i - i*2)))
    }

    console.log("\n= " + midstr.substring(2))
    midstr = ""
    let n = 0;

    for (let i = 0; i < len; i++) {
      n += inn[i] * ( 2 **(len - 1 - i))
    }
     
    for (let i = 1; i < frs.length +1; i++) {
      n += frn[i -1] * (2 **(i - i*2))
    }

    console.log("\n= " + n)
    return n;

  } else {
    console.log("= " + midstr);
    midstr = ""

    for (let i = 0; i < len; i++) {
      midstr += " + " + (inn[i] * ( 2 **(len - 1 - i)))
    }

    console.log("\n= " + midstr.substring(2) + "\n")
    midstr = ""
    let n = 0;

    for (let i = 0; i < len; i++) {
      n += inn[i] * ( 2 **(len - 1 - i))
    }

    console.log("= " + n);
    return n;
  }
}

function isbin(bin){
let n = bin.split("")

for(let i = 0; i<n.length; i++){
let N = n[i]
if(N != "0" && N != "1" && N != ".")
return false
}

return true
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter binary number: ', (input) => {
  let bin = input;
if(!isbin(bin))
return console.log("You not entered correct binary number")

  console.log("Given binary number: " + bin); 

  if (!bin.includes(".")) {
    let ins = bin.split("");
    btod(ins)
  } else {
    let a = bin.split(".");
    let ins = a[0].split("");
    let frs = a[1].split("");
    
    console.log("\nSo binary " + bin + " in decimal = " + btod(ins, frs))
  }

  rl.close();
})