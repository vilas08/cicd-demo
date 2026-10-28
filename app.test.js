const test = require('node:test');
const assert = require('node:assert');
const { add, subtract, multiply, divide, isEven, factorial, average } = require('./app');

test('add', () => {
    assert.strictEqual(add(2, 3), 5);
});

test('subtract', () => {
    assert.strictEqual(subtract(10, 4), 6);
});

test('multiply', () => {
    assert.strictEqual(multiply(4, 5), 20);
});

test('divide', () => {
    assert.strictEqual(divide(10, 2), 5);
});

test('divide by zero throws an error', () => {
    assert.throws(() => divide(10, 0), /Cannot divide by zero/);
});

test('isEven', () => {
    assert.strictEqual(isEven(4), true);
    assert.strictEqual(isEven(7), false);
});

test('factorial', () => {
    assert.strictEqual(factorial(5), 120);
    assert.strictEqual(factorial(0), 1);
});

test('factorial of a negative number throws an error', () => {
    assert.throws(() => factorial(-1), /Negative numbers not allowed/);
});

test('average', () => {
    assert.strictEqual(average([2, 4, 6]), 4);
});

test('average of an empty array throws an error', () => {
    assert.throws(() => average([]), /Array cannot be empty/);
});