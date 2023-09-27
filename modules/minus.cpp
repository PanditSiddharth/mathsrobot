#include <iostream>

int main(){
    int a, b, c;
    std::cout << "Enter First Number: ";
    std::cin >> a;
    std::cout << "Enter Second Number: ";
    std::cin >> b;
    
    c = a - b;
    std::cout << a << std::endl;
    std::cout << "-" << b << std::endl;
    std::cout << "------" << std::endl;
    std::cout << c << std::endl;
    std::cout << "------" << std::endl;
    
    return 0;
}