package main

import (
	"fmt"
	"log"
)

type Calculator struct{}

func (c Calculator) add(a, b int) int {
	// Addition
	return a + b
}

func (c Calculator) subtract(a, b int) int {
	// Subtraction
	return a - b
}

func (c Calculator) multiply(a, b int) int {
	// Multiplication
	return a * b
}

func (c Calculator) divide(a, b int) int {
	// Division
	if b == 0 {
		log.Fatal("Division by zero is not allowed")
	}
	return a / b
}

func main() {
	calc := Calculator{}

	// Test cases
	num1 := 10
	num2 := 3

	fmt.Println("Addition:", calc.add(num1, num2))
	fmt.Println("Subtraction:", calc.subtract(num1, num2))
	fmt.Println("Multiplication:", calc.multiply(num1, num2))
	fmt.Println("Division:", calc.divide(num1, num2))
}
