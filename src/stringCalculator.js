function add(numbers) {
    if (!numbers) {
        return 0;
    }

    let delimiter = /,|\n/; // Default delimiter: comma or newline

    // Check for custom delimiter at the beginning of the string
    if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf("\n");
        delimiter = new RegExp(numbers.substring(2, delimiterEndIndex));
        numbers = numbers.substring(delimiterEndIndex + 1); // Remove the delimiter part
    }

    // Split the numbers by the delimiter(s)
    const nums = numbers.split(delimiter).map(Number);

    // Return the sum of the numbers
    return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
