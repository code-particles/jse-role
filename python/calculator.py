class Calculator:
    def add(self, a, b):
        """Addition operation."""
        return a + b

    def subtract(self, a, b):
        """Subtraction operation."""
        return a - b

    def multiply(self, a, b):
        """Multiplication operation."""
        return a * b

    def divide(self, a, b):
        """
        Division operation.

        Parameters:
        a (float or int): The numerator.
        b (float or int): The denominator.

        Returns:
        float: The result of division.

        Raises:
        ValueError: If the denominator is zero.
        """
        if b == 0:
            raise ValueError("Division by zero is not allowed.")
        return round(a / b, 2)  # Rounded to 2 decimal places

if __name__ == "__main__":
    calc = Calculator()

    # Test cases
    num1 = 10
    num2 = 0

    print("Addition:", calc.add(num1, num2))
    print("Subtraction:", calc.subtract(num1, num2))
    print("Multiplication:", calc.multiply(num1, num2))
    try:
        print("Division:", calc.divide(num1, num2))
    except ValueError as e:
        print(e)
