function factorialRecursive(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}

console.log(factorialRecursive(5)); // Output: 120

// // Let's explain the line return n * factorialRecursive(n - 1); step by step:

// Initial Call (e.g., factorialRecursive(5)):

// The function checks if n is 0 or 1. If not, it proceeds to the recursive case.
// It calculates 5 * factorialRecursive(4).
// First Recursive Call (e.g., factorialRecursive(4)):

// Again, it checks if n is 0 or 1. If not, it calculates 4 * factorialRecursive(3).
// Second Recursive Call (e.g., factorialRecursive(3)):

// It calculates 3 * factorialRecursive(2).
// Third Recursive Call (e.g., factorialRecursive(2)):

// It calculates 2 * factorialRecursive(1).
// Fourth Recursive Call (e.g., factorialRecursive(1)):

// Now, since n is 1, it hits the base case and returns 1.
// Returning Results:

// The result from factorialRecursive(1) is 1.
// This result is returned to factorialRecursive(2), making the calculation 2 * 1 = 2.
// The result 2 is returned to factorialRecursive(3), making the calculation 3 * 2 = 6.
// The result 6 is returned to factorialRecursive(4), making the calculation 4 * 6 = 24.
// The result 24 is returned to factorialRecursive(5), making the calculation 5 * 24 = 120.
