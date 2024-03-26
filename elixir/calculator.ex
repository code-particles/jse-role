defmodule Calculator do
  def add(a, b) do
    # Addition
    a + b
  end

  def subtract(a, b) do
    # Subtraction
    a - b
  end

  def multiply(a, b) do
    # Multiplication
    a * b
  end

  def divide(a, b) do
    # Division
    a / b
  end
end

# Test cases
num1 = 10
num2 = 3

IO.puts("Addition: #{Calculator.add(num1, num2)}")
IO.puts("Subtraction: #{Calculator.subtract(num1, num2)}")
IO.puts("Multiplication: #{Calculator.multiply(num1, num2)}")
IO.puts("Division: #{Calculator.divide(num1, num2)}")
