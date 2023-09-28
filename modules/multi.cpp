#include<iostream>
using namespace std;

int main() {
    double n1,n2;
    cout<<"Enter first number: ";
    cin>>n1;
    cout<<"Enter second number: ";
    cin>>n2;
    double result = n1 * n2;
    cout<<endl<<n1<<" × "<<n2<<" = "<<(result == static_cast<int>(result) ? static_cast<int>(result) : result);
    return 0;
}