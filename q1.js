/*Q1. Write a JavaScript program to find all the index positions of a 
given word within a given string
*/

function findAllOccurrences(word, string) {
    let positions = [];
    let index = string.indexOf(word);
    while (index !== -1) {
        positions.push(index);
        index = string.indexOf(word, index + 1);
    }
    return positions;
}

// Example usage:
let word = "hello";
let text = "hello world, hello universe, hello";
let occurrences = findAllOccurrences(word, text);
console.log("Positions of '" + word + "' in the text:", occurrences);

/*OUTPUT
---------
Positions of 'hello' in the text: [ 0, 13, 29 ]
---------
 */