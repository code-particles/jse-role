class Calculator:
    def _check_numeric(self, a, b):
        if not isinstance(a, (int, float)) or not isinstance(b, (int, float)):
            raise TypeError("Both inputs must be numeric")
    
    def add(self, a, b):
        """Addition"""
        try:
            self._check_numeric(a, b)
            return a + b
        except TypeError:
            print("Both inputs must be numeric")
            return 0

    def subtract(self, a, b):
        """Subtraction"""
        try:
            self._check_numeric(a, b)
            return a - b
        except TypeError:
            print("Both inputs must be numeric")
            return 0
    

    def multiply(self, a, b):
        """Multiplication"""
        try:
            self._check_numeric(a, b)
            return a * b
        except TypeError:
            print("Both inputs must be numeric")
            return 0
        
        

    def divide(self, a, b):
        """Division"""
        try:
            self._check_numeric(a, b)
            return a / b
        except TypeError:
            print("Both inputs must be numeric")
            return 0
            
        except ZeroDivisionError:
            return 0
        


if __name__ == "__main__":
    calc = Calculator()

    # Test cases
    num1 = "hi"
    num2 = 0.5

    print("Addition:", calc.add(num1, num2))
    print("Subtraction:", calc.subtract(num1, num2))
    print("Multiplication:", calc.multiply(num1, num2))
    print("Division:", calc.divide(num1, num2))
