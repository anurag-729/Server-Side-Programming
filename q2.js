/*Q2. Write a JavaScript program to find the first index of a given 
element in an array using the linear search algorithm
*/

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if the target is found
        }
    }
    return -1; // Return -1 if the target is not found in the array
}

// Example usage:
let array = [4, 2, 7, 1, 9, 6];
let targetElement = 7;
let index = linearSearch(array, targetElement);
if (index !== -1) {
    console.log("The first index of", targetElement, "in the array is:", index);
} else {
    console.log(targetElement, "is not found in the array.");
}

/*OUTPUT
---------
The first index of 7 in the array is: 2
---------
 */