function htod(ins, frs = null) {
  let inn = ins.map(x => parseInt(x, 16));

  console.log("\nNow multiply each number with 16^[ i ]\nHere i is according to value of that place\n");

  let len = ins.length;
  let midstr = "";
  for (let i = 0; i < len; i++) {
    midstr += " + (" + ins[i] + " × 16^" + (len - 1 - i) + ")"
  }
  midstr = midstr.substring(2)

  if (frs) {
    let frn = frs.map(x => parseInt(x, 16));

    for (let i = 1; i < frs.length +1; i++) {
      midstr += " + (" + frs[i -1] + " × 16^[-" + (i) + "])"
    }

    console.log("= " + midstr);
    midstr = ""

    for (let i = 0; i < len; i++) {
      midstr += " + " + ins[i] + " × " + ( 16 **(len - 1 - i))
    }
     
    for (let i = 1; i < frs.length +1; i++) {
      midstr += " + " + frs[i -1] + " × " + (16 **(i - i*2)) 
    }

    console.log("\n= " + midstr.substring(2))
    midstr = ""

    for (let i = 0; i < len; i++) {
      midstr += " + " + (inn[i] * ( 16 **(len - 1 - i)))
    }
     
    for (let i = 1; i < frs.length +1; i++) {
      midstr += " + " + (frn[i -1] * (16 **(i - i*2)))
    }

    console.log("\n= " + midstr.substring(2))
    midstr = ""
    let n = 0;

    for (let i = 0; i < len; i++) {
      n += inn[i] * ( 16 **(len - 1 - i))
    }
     
    for (let i = 1; i < frs.length +1; i++) {
      n += frn[i -1] * (16 **(i - i*2))
    }

    console.log("\n= " + n)
    return n;

  } else {
    console.log("= " + midstr);
    midstr = ""

    for (let i = 0; i < len; i++) {
      midstr += " + " + (inn[i] * ( 16 **(len - 1 - i)))
    }

    console.log("\n= " + midstr.substring(2) + "\n")
    midstr = ""
    let n = 0;

    for (let i = 0; i < len; i++) {
      n += inn[i] * ( 16 **(len - 1 - i))
    }

    console.log("= " + n);
    return n;
  }
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter Hexadecimal number: ', (input) => {
  let hex = input;

  console.log("Given Hexadecimal number: " + hex); 

  if (!hex.includes(".")) {
    let ins = hex.split("");
    htod(ins)
  } else {
    let a = hex.split(".");
    let ins = a[0].split("");
    let frs = a[1].split("");
    
    console.log("\nSo hex " + hex + " in decimal = " + htod(ins, frs))
  }

  rl.close();
})