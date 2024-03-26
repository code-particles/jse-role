#include <stdio.h>
#include <stdlib.h>

// Function prototypes
int add(int a, int b);
int subtract(int a, int b);
int multiply(int a, int b);
int divide(int a, int b);

int main()
{
    // Test cases
    int num1 = 10;
    int num2 = 3;

    printf("Addition: %d\n", add(num1, num2));
    printf("Subtraction: %d\n", subtract(num1, num2));
    printf("Multiplication: %d\n", multiply(num1, num2));
    printf("Division: %d\n", divide(num1, num2));

    return 0;
}

// Function definitions

int add(int a, int b)
{
    // Addition
    return a + b;
}

int subtract(int a, int b)
{
    // Subtraction
    return a - b;
}

int multiply(int a, int b)
{
    // Multiplication
    return a * b;
}

int divide(int a, int b)
{
    // Division
    return a / b;
}
