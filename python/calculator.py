class Calculator:
    def add(self, a, b):
        """Addition"""
        return a + b

    def subtract(self, a, b):
        """Subtraction"""
        return a - b

    def multiply(self, a, b):
        """Multiplication"""
        return a * b

    def divide(self, a, b):
        """Division"""
        return a / b


if __name__ == "__main__":
    calc = Calculator()

    # Test cases
    num1 = 10
    num2 = 3

    print("Addition:", calc.add(num1, num2))
    print("Subtraction:", calc.subtract(num1, num2))
    print("Multiplication:", calc.multiply(num1, num2))
    print("Division:", calc.divide(num1, num2))
