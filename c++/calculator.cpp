#include <iostream>
#include <stdexcept>

class Calculator
{
public:
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
};

int main()
{
    Calculator calc;

    // Test cases
    int num1 = 10;
    int num2 = 3;

    std::cout << "Addition: " << calc.add(num1, num2) << std::endl;
    std::cout << "Subtraction: " << calc.subtract(num1, num2) << std::endl;
    std::cout << "Multiplication: " << calc.multiply(num1, num2) << std::endl;
    std::cout << "Division: " << calc.divide(num1, num2) << std::endl;

    return 0;
}
