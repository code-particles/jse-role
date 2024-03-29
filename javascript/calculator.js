class Calculator {
  add(a, b) {
    this.validateNumbers(a, b);
    // Addition
    const result = a + b;

    //testing if result exceeds maximum representable value
    if (!isFinite(result)) {
      throw new Error('Result exceeds maximum representable value');
    }
    return result;
  }

  subtract(a, b) {
    this.validateNumbers(a, b);
    // Subtraction
    const result = a - b;

    //testing if result exceeds maximum representable value
    if (!isFinite(result)) {
      throw new Error('Result exceeds maximum representable value');
    }
    return result;
  }

  multiply(a, b) {
    this.validateNumbers(a, b);
    // Multiplication
    const result = a * b;

    //testing if result exceeds maximum representable value
    if (!isFinite(result)) {
      throw new Error('Result exceeds maximum representable value');
    }
    // Checking if result is in scientific notation
    if (result.toString().includes('e')) {
      throw new Error('precision limits exceeded. result too long');
    }
    return result;
  }

  divide(a, b) {
    this.validateNumbers(a, b);
    // Division
    // Handle division by zero. can also be handled by isFinite method below
    if (b === 0) {
      throw new Error('Error occurred, cannot divide by zero');
    }
    //testing if result exceeds maximum representable value eg: Infinity
    const result = a / b;
    if (!isFinite(result)) {
      throw new Error('Result exceeds maximum representable value');
    }
    // Checking if result is in scientific notation
    if (result.toString().includes('e')) {
      throw new Error('precision limits exceeded. result too long');
    }
    return result;
  }

  //input validation helper
  validateNumbers(a, b) {
    //ensure input are number only, check for Not a Number and detect scientific notation represented by e (e.g. 1e2)
    if (typeof a !== 'number' || isNaN(a) || a.toString().includes('e')) {
      throw new Error(`num1 '${a}' is not a valid number`);
    }
    if (typeof b !== 'number' || isNaN(b) || b.toString().includes('e')) {
      throw new Error(`num2 '${b}' is not a valid number`);
    }
  }
}

// Test cases
const calc = new Calculator();
const num1 = 45678994578564567;
const num2 = 3456789045555557;
try {
  console.log('Addition:', calc.add(num1, num2));
  console.log('Subtraction:', calc.subtract(num1, num2));
  console.log('Multiplication:', calc.multiply(num1, num2));
  console.log('Division:', calc.divide(num1, num2));
} catch (error) {
  console.log(error.message);
}

// some test to test the functions
const testCalculator = new Calculator();

// add test
try {
  const additionResult = testCalculator.add(2, 3);
  console.log('add test passed. Result:', additionResult);
} catch (error) {
  console.error('add test failed:', error.message);
}

// minus test
try {
  const subtractionResult = testCalculator.subtract(5, 3);
  console.log('subtraction test passed. Result:', subtractionResult);
} catch (error) {
  console.error('subtraction test failed:', error.message);
}

// multiply test
try {
  const multiplicationResult = testCalculator.multiply(2, 3);
  console.log('multiplication test passed. Result:', multiplicationResult);
} catch (error) {
  console.error('multiplication test failed:', error.message);
}

// divide test
try {
  const divisionResult = testCalculator.divide(
    49135783624120130,
    42222205533009010
  );
  console.log('Division test passed. Result:', divisionResult);
} catch (error) {
  console.error('Division test failed:', error.message);
}
