package java;

public class Calculator {
    public int add(int a, int b) {
        // Addition
        return a + b;
    }

    public int subtract(int a, int b) {
        // Subtraction
        return a - b;
    }

    public int multiply(int a, int b) {
        // Multiplication
        return a * b;
    }

    public int divide(int a, int b) {
        // Division
        return a / b;
    }

    public static void main(String[] args) {
        Calculator calc = new Calculator();

        // Test cases
        int num1 = 10;
        int num2 = 3;

        System.out.println("Addition: " + calc.add(num1, num2));
        System.out.println("Subtraction: " + calc.subtract(num1, num2));
        System.out.println("Multiplication: " + calc.multiply(num1, num2));
        System.out.println("Division: " + calc.divide(num1, num2));
    }
}
