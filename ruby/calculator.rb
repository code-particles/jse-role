class Calculator
    def add(a, b)
      # Addition
      a + b
    end
  
    def subtract(a, b)
      # Subtraction
      a - b
    end
  
    def multiply(a, b)
      # Multiplication
      a * b
    end
  
    def divide(a, b)
      # Division
      a / b
    end
  end
  
  # Test cases
  calc = Calculator.new
  num1 = 10
  num2 = 3
  
  puts "Addition: #{calc.add(num1, num2)}"
  puts "Subtraction: #{calc.subtract(num1, num2)}"
  puts "Multiplication: #{calc.multiply(num1, num2)}"
  puts "Division: #{calc.divide(num1, num2)}"
  