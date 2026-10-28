function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}

function isEven(n) {
    return n % 2 === 0;
}

function factorial(n) {
    if (n < 0) {
        throw new Error('Negative numbers not allowed');
    }
    return n <= 1 ? 1 : n * factorial(n - 1);
}

function average(numbers) {
    if (numbers.length === 0) {
        throw new Error('Array cannot be empty');
    }
    return numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
}

module.exports = { add, subtract, multiply, divide, isEven, factorial, average };