a = int(input("Enter First Number: "))
b = int(input("Enter Second Number: "))

c = a - b
if len(str(a)) > len(str(b)):
    lent = len(str(a))
else:
    lent = len(str(b))
if lent == 1:
    lent = 2
print("\n\n")
print(f"{a:>{len(str(a))}}")
print(f"-{b:>{len(str(a))}}")
print(f"{'=='*len(str(lent))}")
print(f"{c}")
print(f"{'=='*len(str(lent))}")
print("\nBy Subtracting ",b," from ",a," we got ",c)