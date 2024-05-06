/*Q5. Write a JavaScript program to sort a list of elements using Heap 
sort
*/


function heapSort(arr) {
    buildMaxHeap(arr); // Build a max heap from the array
    let endIndex = arr.length - 1;
    while (endIndex > 0) {
        // Swap the root (maximum element) of the heap with the last element of the heap
        [arr[0], arr[endIndex]] = [arr[endIndex], arr[0]];
        endIndex--;
        // Restore the heap property by performing heapify on the reduced heap
        heapify(arr, 0, endIndex);
    }
    return arr;
}

function buildMaxHeap(arr) {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, i, n - 1);
    }
}

function heapify(arr, startIndex, endIndex) {
    let largest = startIndex;
    const leftIndex = 2 * startIndex + 1;
    const rightIndex = 2 * startIndex + 2;

    if (leftIndex <= endIndex && arr[leftIndex] > arr[largest]) {
        largest = leftIndex;
    }

    if (rightIndex <= endIndex && arr[rightIndex] > arr[largest]) {
        largest = rightIndex;
    }

    if (largest !== startIndex) {
        [arr[startIndex], arr[largest]] = [arr[largest], arr[startIndex]];
        heapify(arr, largest, endIndex);
    }
}

// Example usage:
const unsortedArray = [-6, 39, 59, 11, 75, 88, 22, 77, 39];
console.log("Unsorted array:", unsortedArray);


const sortedArray = heapSort(unsortedArray);
console.log("Sorted array:", sortedArray);

/*OUTPUT
---------
Unsorted array: [
  -6, 39, 59, 11, 75,
  88, 22, 77, 39
]
Sorted array: [
  -6, 11, 22, 39, 39,
  59, 75, 77, 88
]
---------
 */