/*Q24. Write a JavaScript program that uses a try-catch block to catch 
and handle a 'SyntaxError' when parsing an invalid JSON string
*/

try {
    // Attempt to parse an invalid JSON string
    const invalidJSONString = "{ key: 'value' }";
    const parsedData = JSON.parse(invalidJSONString);
    console.log(parsedData);
} catch (error) {
    // Handle the error if it's a SyntaxError
    if (error instanceof SyntaxError) {
        console.error("Invalid JSON string:", error.message);
    } else {
        // Handle other types of errors
        console.error("An error occurred:", error);
    }
}

/*OUTPUT
---------
Invalid JSON string: Unexpected token k in JSON at position 2
---------
 */