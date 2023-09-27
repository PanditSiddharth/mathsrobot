function otod(ins, frs = null) {
  // Convert octal digits to decimal
  let inn = ins.map(x => parseInt(x, 8));

  console.log("\nNow multiply each number with 8^[ i ]\nHere i is according to the value of that place\n");

  let len = ins.length;
  let midstr = "";
  for (let i = 0; i < len; i++) {
    midstr += " + (" + ins[i] + " × 8^" + (len - 1 - i) + ")"
  }
  midstr = midstr.substring(2)

  if (frs) {
    let frn = frs.map(x => parseInt(x, 8));

    for (let i = 1; i < frs.length +1; i++) {
      midstr += " + (" + frs[i -1] + " × 8^[-" + (i) + "])"
    }

    console.log("= " + midstr);
    midstr = ""

    for (let i = 0; i < len; i++) {
      midstr += " + " + ins[i] + " × " + ( 8 **(len - 1 - i))
    }

    for (let i = 1; i < frs.length +1; i++) {
      midstr += " + " + frs[i -1] + " × " + (8 **(i - i*2)) 
    }

    console.log("\n= " + midstr.substring(2))
    midstr = ""

    for (let i = 0; i < len; i++) {
      midstr += " + " + (inn[i] * ( 8 **(len - 1 - i)))
    }

    for (let i = 1; i < frs.length +1; i++) {
      midstr += " + " + (frn[i -1] * (8 **(i - i*2)))
    }

    console.log("\n= " + midstr.substring(2))
    midstr = ""
    let n = 0;

    for (let i = 0; i < len; i++) {
      n += inn[i] * ( 8 **(len - 1 - i))
    }

    for (let i = 1; i < frs.length +1; i++) {
      n += frn[i -1] * (8 **(i - i*2))
    }

    console.log("\n= " + n);
    return n;

  } else {
    console.log("= " + midstr);
    midstr = ""

    for (let i = 0; i < len; i++) {
      midstr += " + " + (inn[i] * ( 8 **(len - 1 - i)))
    }

    console.log("\n= " + midstr.substring(2) + "\n")
    midstr = ""
    let n = 0;

    for (let i = 0; i < len; i++) {
      n += inn[i] * ( 8 **(len - 1 - i))
    }

    console.log("= " + n);
    return n;
  }
}

function isoct(oct){
  let n = oct.split("")
if(n.includes("-")){
console.log("Currently not available for - numbers")
return false
}
  for (let i = 0; i < n.length; i++){
    let N = n[i]
    if (N < "0" && N > "7" && N != ".") {
      return false;
    }
  }

  return true;
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter octal number: ', (input) => {
  let oct = input;
  if(!isoct(oct))
    return console.log("You have not entered a correct octal number");

  console.log("Given octal number: " + oct); 

  if (!oct.includes(".")) {
    let ins = oct.split("");
    otod(ins);
  } else {
    let a = oct.split(".");
    let ins = a[0].split("");
    let frs = a[1].split("");
    
    console.log("\nSo octal " + oct + " in decimal = " + otod(ins, frs));
  }

  rl.close();
});