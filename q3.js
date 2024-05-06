/*Q3. Write a JavaScript program to sort a list of elements using Quick 
sort
*/

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: array with 0 or 1 element is already sorted
    }

    const pivot = arr[Math.floor(arr.length / 2)]; // Choose a pivot element
    const left = [];
    const right = [];

    // Partition the array into two sub-arrays: elements less than pivot and elements greater than pivot
    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) {
            continue; // Skip the pivot element
        }
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively apply quickSort to the left and right sub-arrays, and concatenate the sorted arrays with pivot in between
    return quickSort(left).concat(pivot, quickSort(right));
}

// Example usage:
const unsortedArray = [6, 3, 9, 1, 5, 8, 2, 7, 4];
console.log("Unsorted array:", unsortedArray);

const sortedArray = quickSort(unsortedArray);
console.log("Sorted array:", sortedArray);

/*OUTPUT
---------
Unsorted array: [
  6, 3, 9, 1, 5,
  8, 2, 7, 4
]
Sorted array: [
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
---------
 */