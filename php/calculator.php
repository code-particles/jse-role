<?php
class Calculator
{
    public function add($a, $b)
    {
        // Addition
        return $a + $b;
    }

    public function subtract($a, $b)
    {
        // Subtraction
        return $a - $b;
    }

    public function multiply($a, $b)
    {
        // Multiplication
        return $a * $b;
    }

    public function divide($a, $b)
    {
        // Division
        return $a / $b;
    }
}

// Test cases
$calc = new Calculator();
$num1 = 10;
$num2 = 3;

echo "Addition: " . $calc->add($num1, $num2) . "\n";
echo "Subtraction: " . $calc->subtract($num1, $num2) . "\n";
echo "Multiplication: " . $calc->multiply($num1, $num2) . "\n";
echo "Division: " . $calc->divide($num1, $num2) . "\n";
