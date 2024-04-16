// Write a function that performs a binary search on a sorted array.

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const midValue = arr[mid];

        if (midValue === target) {
            return mid; // Return the index of the target element if found
        } else if (midValue < target) {
            low = mid + 1; // Continue searching in the right half
        } else {
            high = mid - 1; // Continue searching in the left half
        }
    }

    return -1; // Return -1 if the target element is not found in the array
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const targetElement = 7;
const resultIndex = binarySearch(sortedArray, targetElement);
if (resultIndex !== -1) {
    console.log(`Element ${targetElement} found at index ${resultIndex}`);
} else {
    console.log(`Element ${targetElement} not found in the array`);
}
