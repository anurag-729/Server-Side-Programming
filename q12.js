/*Q12. Write a JavaScript function to validate whether a given value is 
RegExp or not
*/

function isRegExp(value) {
    return value instanceof RegExp;
}

// Example usage:
console.log(isRegExp(/test/));    // Output: true
console.log(isRegExp(new RegExp("test"))); // Output: true
console.log(isRegExp("test"));    // Output: false
console.log(isRegExp(123));       // Output: false
console.log(isRegExp(null));      // Output: false

/*OUTPUT
---------
true
true
false
false
false
---------
 */