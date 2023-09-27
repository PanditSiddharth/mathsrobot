#include <iostream>
#include <vector>
#include <iomanip>

using namespace std;

int main() {
    vector<float> n(12);

    cout << "Gauss Seidel method for solving a sys.tem of linear equations\n\n";
    cout << "Enter the coefficients of the variables and the constants of the equations\n";

    for (int i = 0; i < 12; i++) {
       cout<<"Num "<<i<<": ";
        cin >> n[i];
    }

    cout << "\nYour equations are: \n";

    for (int i = 0; i < 3; i++) {
        cout << setprecision(2) << fixed << n[i] << "a + " << n[i + 1] << "b + " << n[i + 2] << "c = " << n[i + 3] << endl;
    }

    cout << "\nUsing Gauss Seidel method to solve the equations...\n\n";

    float a = 0;
    float b = 0;
    float c = 0;

    for (int iter = 1; iter <= 3; iter++) {
        cout << "Iteration " << iter << ":\n";

        float a_new = (n[3] - n[1] * b - n[2] * c) / n[0];
        float b_new = (n[7] - n[4] * a_new - n[6] * c) / n[5];
        float c_new = (n[11] - n[8] * a_new - n[9] * b_new) / n[10];

        cout << "a = " << a_new << ", b = " << b_new << ", c = " << c_new << endl << endl;
  
        a = a_new;
        b = b_new;
        c = c_new;
    }

    cout << "The solution is: a = " << a << ", b = " << b << ", c = " << c << endl;

    return 0;
}