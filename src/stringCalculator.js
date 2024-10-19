function add(numbers) {
    if (!numbers) {
        return 0;
    }

    let delimiter = /,|\n/; // Default delimiter: comma or newline

    // Check for custom delimiter at the beginning of the string
    if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf("\n");
        const delimiterSection = numbers.substring(2, delimiterEndIndex);
        
        if (delimiterSection.startsWith("[")) {
            // Handle multiple delimiters or delimiters of any length
            const delimiters = delimiterSection.match(/\[(.*?)\]/g).map(d => d.slice(1, -1));
            delimiter = new RegExp(delimiters.map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join("|"));
        } else {
            delimiter = new RegExp(delimiterSection); // Single character delimiter
        }
        numbers = numbers.substring(delimiterEndIndex + 1); // Remove the delimiter part
    }

    // Split the numbers by the delimiter(s)
    const nums = numbers.split(delimiter).map(Number);

    // Check for negative numbers
    const negatives = nums.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negatives not allowed: ${negatives.join(",")}`);
    }

    // Ignore numbers greater than 1000
    return nums.reduce((sum, num) => num > 1000 ? sum : sum + num, 0);
}

module.exports = { add };
