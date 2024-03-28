class Calculator {
  add(a, b) {
    // Addition
    this.validateInput(a, b);
    return a + b;
  }

  subtract(a, b) {
    // Subtraction
    this.validateInput(a, b);
    return a - b;
  }

  multiply(a, b) {
    // Multiplication
    this.validateInput(a, b);
    return a * b;
  }

  divide(a, b) {
    // Division
    this.validateInput(a, b);

    // Check if the divisor is zero to prevent division by zero
    if (b === 0) {
      throw new Error("Divisor should not be a 0");
    }
    return a / b;
  }

  // Method to validate input values
  validateInput(a, b) {
    // Check if both inputs are numbers and not NaN
    if (
      typeof a !== "number" ||
      typeof b !== "number" ||
      isNaN(a) ||
      isNaN(b)
    ) {
      throw new Error("Both inputs should be valid numbers");
    }
  }
}

// Test cases
const calc = new Calculator();
const num1 = 10;
const num2 = 0;

try {
  console.log("Addition:", calc.add(num1, num2));
  console.log("Subtraction:", calc.subtract(num1, num2));
  console.log("Multiplication:", calc.multiply(num1, num2));
  console.log("Division:", calc.divide(num1, num2));
} catch (error) {
  console.error("An error has occured:", error.message);
}
