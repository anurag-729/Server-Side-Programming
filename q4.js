/*Q4. Write a JavaScript program to sort a list of elements using 
Merge sort
*/

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: array with 0 or 1 element is already sorted
    }

    // Divide the array into two halves
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Recursively apply mergeSort to the left and right halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from left and right halves and merge them into result array in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Add any remaining elements from left and right halves to result array
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage:
const unsortedArray = [69, 31, 79, 11, -5, 80, 200, 7, 40];
console.log("Unsorted array:", unsortedArray);

const sortedArray = mergeSort(unsortedArray);
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