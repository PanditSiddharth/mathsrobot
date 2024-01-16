#include<iostream>
using namespace std;

int main() {
    int n1,n2,n3;
    cout<<"Enter first number: ";
    cin>>n1;
    cout<<"Enter second number: ";
    cin>>n2;
    double result = double(n1) / n2;
    cout<<endl<<n1<<" ÷ "<<n2<<" = "<<(result == static_cast<int>(result) ? static_cast<int>(result) : result);
    return 0;
}