/*Q9. Write a JavaScript program to check if a numeric array is sorted 
or not
*/

function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false; // Array is not sorted
        }
    }
    return true; // Array is sorted
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5];
const unsortedArray = [5, 3, 1, 2, 4];

console.log("Is sortedArray sorted?", isSorted(sortedArray)); // Output: true
console.log("Is unsortedArray sorted?", isSorted(unsortedArray)); // Output: false

/*OUTPUT
---------
Is sortedArray sorted? true
Is unsortedArray sorted? false
---------
 */