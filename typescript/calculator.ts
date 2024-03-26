class Calculator {
    add(a: number, b: number): number {
        // Addition
        return a + b;
    }

    subtract(a: number, b: number): number {
        // Subtraction
        return a - b;
    }

    multiply(a: number, b: number): number {
        // Multiplication
        return a * b;
    }

    divide(a: number, b: number): number {
        // Division
        return a / b;
    }
}

// Test cases
const calc = new Calculator();
const num1: number = 10;
const num2: number = 3;

console.log("Addition:", calc.add(num1, num2));
console.log("Subtraction:", calc.subtract(num1, num2));
console.log("Multiplication:", calc.multiply(num1, num2));
console.log("Division:", calc.divide(num1, num2));
