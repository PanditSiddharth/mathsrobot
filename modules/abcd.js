require("jsshort")

async function sum(){
let a = await input("Enter first number: ")
let b = await input("Enter 2nd number: ")

print("Sum of both numbers is:", end= " ")
print(int(a)+int(b))
}

sum()