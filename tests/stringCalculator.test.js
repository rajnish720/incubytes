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
test('should return the sum of all the numbers separated by commas', () => {
    expect(add("1,5,4")).toBe(10);
});
