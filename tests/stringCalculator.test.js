const { add } = require('../src/stringCalculator');

// Test for empty string
test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

// Test for a single number
test('should return the number itself for a single number', () => {
    expect(add("1")).toBe(1);
});

// Test for two comma-separated numbers
test('should return the sum of two numbers separated by commas', () => {
    expect(add("1,5")).toBe(6);
});

// Test for more than two comma-separated numbers
test('should return the sum of all numbers separated by commas', () => {
    expect(add("1,5,4")).toBe(10);
});

// Test for handling newlines between numbers
test('should return the sum of numbers separated by commas and newlines', () => {
    expect(add("1\n2,3")).toBe(6);
});

// Test for handling custom delimiters
test('should return the sum of numbers using custom delimiter', () => {
    expect(add("//;\n1;2;3")).toBe(6);
});

// Test for handling multiple newlines and commas
test('should return the sum of numbers separated by multiple commas and newlines', () => {
    expect(add("1\n2\n3,4")).toBe(10);
});

// Test for handling custom delimiter with special characters
test('should return the sum of numbers using a custom delimiter with special characters', () => {
    expect(add("//#\n1#2#3")).toBe(6);
});

// Test for handling a single negative number
test('should throw an error when a negative number is passed', () => {
    expect(() => add("1,-2,3")).toThrow("negatives not allowed: -2");
});

// Test for handling multiple negative numbers
test('should throw an error when multiple negative numbers are passed', () => {
    expect(() => add("1,-2,-3,4")).toThrow("negatives not allowed: -2,-3");
});

// Test for ignoring numbers greater than 1000
test('should ignore numbers greater than 1000', () => {
    expect(add("2,1001")).toBe(2);
});

test('should sum numbers and ignore numbers greater than 1000', () => {
    expect(add("1000,999,1001")).toBe(1999);
});

// Test for handling delimiters of any length
test('should return the sum of numbers using a custom delimiter of any length', () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
});

test('should return the sum of numbers with a custom long delimiter', () => {
    expect(add("//[###]\n4###5###6")).toBe(15);
});

// Test for handling multiple delimiters
test('should return the sum of numbers using multiple delimiters', () => {
    expect(add("//[*][%]\n1*2%3")).toBe(6);
});

// Test for handling multiple delimiters with longer length
test('should return the sum of numbers using multiple delimiters of any length', () => {
    expect(add("//[***][%%]\n1***2%%3")).toBe(6);
});
