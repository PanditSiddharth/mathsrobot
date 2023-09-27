#include <iostream>
#include <cmath>

using namespace std;

const int MAX_SIZE = 100;

// Function to perform elementary row operations
void performElementaryRowOps(double matrix[MAX_SIZE][MAX_SIZE], int n, int row1, int row2, double factor) {
    for(int j = 0; j < n; j++) {
        matrix[row2][j] -= matrix[row1][j] * factor;
    }
}

// Function to display matrix
void displayMatrix(double matrix[MAX_SIZE][MAX_SIZE], int n) {
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++) {
            cout << matrix[i][j] << "\t";
        }
        cout << endl;
    }
}

// Function to find the inverse of a matrix
void inverseMatrix(double matrix[MAX_SIZE][MAX_SIZE], int n) {
    // Create an identity matrix
    double identity[MAX_SIZE][MAX_SIZE];
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++) {
            if(i == j) {
                identity[i][j] = 1;
            } else {
                identity[i][j] = 0;
            }
        }
    }
    
    // Perform row operations to get the upper triangular form
    for(int i = 0; i < n; i++) {
        if(matrix[i][i] == 0) {
            // Find the non-zero element below the current element
            int k = i+1;
            while(k < n && matrix[k][i] == 0) {
                k++;
            }
            if(k == n) {
                cout << "Inverse does not exist." << endl;
                return;
            }
            // Swap rows to bring the non-zero element up
            for(int j = i; j < n; j++) {
                swap(matrix[i][j], matrix[k][j]);
                swap(identity[i][j], identity[k][j]);
            }
        }
        for(int j = i+1; j < n; j++) {
            double factor = matrix[j][i] / matrix[i][i];
            performElementaryRowOps(matrix, n, i, j, factor);
            performElementaryRowOps(identity, n, i, j, factor);
        }
    }
    
    // Perform row operations to get the diagonal form
    for(int i = n-1; i >= 0; i--) {
        for(int j = i-1; j >= 0; j--) {
            double factor = matrix[j][i] / matrix[i][i];
            performElementaryRowOps(matrix, n, i, j, factor);
            performElementaryRowOps(identity, n, i, j, factor);
        }
    }
    
    // Perform row operations to get the identity matrix
    for(int i = 0; i < n; i++) {
        double factor = matrix[i][i];
        for(int j = 0; j < n; j++) {
            matrix[i][j] /= factor;
            identity[i][j] /= factor;
        }
    }
    
    cout << "Inverse:" << endl;
    displayMatrix(identity, n);
}

// Main function
int main() {
    double matrix[MAX_SIZE][MAX_SIZE];
    int n;

    cout << "Enter the size of the matrix: ";
    cin >> n;

    cout << "Enter the elements of the matrix: " << endl;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cin >> matrix[i][j];
        }
    }

    inverseMatrix(matrix, n);

    return 0;
}