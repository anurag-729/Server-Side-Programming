/*Q6. Write a JavaScript program to sort a list of elements using 
Insertion sort
*/


function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than currentValue,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > currentValue) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = currentValue;
    }
    return arr;
}

// Example usage:
const unsortedArray = [6, 3, 9, 1, 5, 8, 2, 7, 4];
console.log("Unsorted array:", unsortedArray);

const sortedArray = insertionSort(unsortedArray);
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