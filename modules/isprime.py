num = int(input("Enter a positive integer: "))

if num == 0 or num == 1:
    print(num, "is not a prime number.")
else:
    flag = 0
    for i in range(2, num // 2 + 1):
        if num % i == 0:
            flag = 1
            break

    if flag == 0:
        print(num, "is a prime number.")
    else:
        print(num, "is not a prime number.")