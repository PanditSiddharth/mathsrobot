let a = 1;
for(i=0;i++<9;i){
for(j=0;j<10;j++){
process.stdout.write(j+ "" + i + " ")
}
console.log()
}
console.log([...Array(10)].map((_,i)=>(i+1)*10).join(" "))