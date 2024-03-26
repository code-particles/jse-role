class Calculator {
  add(a, b) {
    // Addition
    return a + b;
  }

  subtract(a, b) {
    // Subtraction
    return a - b;
  }

  multiply(a, b) {
    // Multiplication
    return a * b;
  }

  divide(a, b) {
    // Division
    if (num2 === 0) {
      return "num1 cannot be zero"
    } else {return a / b;}
  }
}

// Test cases
const calc = new Calculator();
const num1 = 10;
const num2 = 0;

console.log("Addition:", calc.add(num1, num2));
console.log("Subtraction:", calc.subtract(num1, num2));
console.log("Multiplication:", calc.multiply(num1, num2));
console.log("Division:", calc.divide(num1, num2));
