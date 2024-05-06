/*Q11. Write a JavaScript function to validate whether a given value is 
a number or not
*/

function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

// Example usage:
console.log(isNumber(5));      // Output: true
console.log(isNumber("5"));    // Output: false
console.log(isNumber("hello")); // Output: false
console.log(isNumber(null));   // Output: false
console.log(isNumber(undefined)); // Output: false

/*OUTPUT
---------
true
false
false
false
false
---------
 */