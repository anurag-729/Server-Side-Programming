/*Q7. Write a JavaScript program to sort a list of elements using 
Bubble sort
*/

function bubbleSort(arr) {
    const n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap elements if they are in the wrong order
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

// Example usage:
const unsortedArray = [69, 31, 79, 11, -5, 80, 200, 7, 40];
console.log("Unsorted array:", unsortedArray);

const sortedArray = bubbleSort(unsortedArray);
console.log("Sorted array:", sortedArray);

/*OUTPUT
---------
Unsorted array: [
  69,  31, 79, 11, -5,
  80, 200,  7, 40
]
Sorted array: [
  -5,  7, 11,  31, 40,
  69, 79, 80, 200
]---------
 */