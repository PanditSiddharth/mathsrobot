#include<iostream>
using namespace std;

int main()
{
    int rows, cols, i, j;
    cout<<"Enter the number of rows in the matrices: ";
    cin>>rows;
    cout<<"Enter the number of columns in the matrices: ";
    cin>>cols;

    int matrix1[rows][cols], matrix2[rows][cols], sum[rows][cols];

    // Input for matrix1
    cout<<"\nEnter elements of matrix 1: \n";
    for(i=0;i<rows;i++)
    {
        for(j=0;j<cols;j++)
        {
cout<<"Column "<<i<<"Row "<< j;
            cin>>matrix1[i][j];
        }
    }

    // Input for matrix2
    cout<<"\nEnter elements of matrix 2: \n";
    for(i=0;i<rows;i++)
    {
        for(j=0;j<cols;j++)
        {
            cout<<"Column "<<i<<"Row "<< j;
            cin>>matrix2[i][j];
        }
    }

cout<<"\nEntered matrix 1 is: "<<endl;
    
    for(i=0;i<rows;i++)
    {
     cout<<"|";
        for(j=0;j<cols;j++)
        {
            cout<<" "<<matrix1[i][j];
        }
        cout<<" |\n";
    }

    cout<<"\nEntered matrix 2 is: "<<endl;
    // Displaying matrix2 using emojis

    for(i=0;i<rows;i++)
    {
      cout<<"|";
        for(j=0;j<cols;j++)
        {
            cout<<" " << matrix2[i][j];
        }
        cout<<" |\n";
    }

cout<<"\nNow adding both matrix "<<endl;
    for(i=0;i<rows;i++)
    {
     cout<<"|";
        for(j=0;j<cols;j++)
        {
            cout<<" " << matrix1[i][j]<<"+"<< matrix2[i][j];
        }
        cout<<" |"<<endl;
    }

    // Adding the matrices
    cout<<"\nThe sum of the matrices is: \n";
    for(i=0;i<rows;i++)
    {
    cout<<"|";
        for(j=0;j<cols;j++)
        {
            sum[i][j] = matrix1[i][j] + matrix2[i][j];
            cout<<" " <<sum[i][j];
        }
      cout<<" | "<<endl;
    }
    return 0;
}