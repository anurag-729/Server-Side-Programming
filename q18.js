/*Q18. Write a JavaScript function that takes a string with both 
lowercase and upper case letters as a parameter. It converts upper 
case letters to lower case, and lower case letters to upper case
*/

function convertCase(str) {
    let convertedString = "";
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        // Check if the character is uppercase
        if (char >= 'A' && char <= 'Z') {
            // Convert uppercase to lowercase
            convertedString += char.toLowerCase();
        } else if (char >= 'a' && char <= 'z') {
            // Convert lowercase to uppercase
            convertedString += char.toUpperCase();
        } else {
            // Leave non-alphabetic characters unchanged
            convertedString += char;
        }
    }
    return convertedString;
}

// Example usage:
const inputString = "A Quick bRown FoX jumPs oVer a laZy dOG !";
console.log("Input string:", inputString);

const convertedString = convertCase(inputString);
console.log("Converted string:", convertedString);

/*OUTPUT
---------
Input string: A Quick bRown FoX jumPs oVer a laZy dOG !
Converted string: a qUICK BrOWN fOx JUMpS OvER A LAzY Dog !
---------
 */