import Foundation

class Calculator {
    func add(_ a: Int, _ b: Int) -> Int {
        // Addition
        return a + b
    }

    func subtract(_ a: Int, _ b: Int) -> Int {
        // Subtraction
        return a - b
    }

    func multiply(_ a: Int, _ b: Int) -> Int {
        // Multiplication
        return a * b
    }

    func divide(_ a: Int, _ b: Int) -> Int {
        // Division
        return a / b
    }
}

// Test cases
let calc = Calculator()
let num1 = 10
let num2 = 3

print("Addition: \(calc.add(num1, num2))")
print("Subtraction: \(calc.subtract(num1, num2))")
print("Multiplication: \(calc.multiply(num1, num2))")
print("Division: \(calc.divide(num1, num2))")
