// Session 5: Searching Algorithms

// - Topics: Linear search, binary search

// Problems: I


// 1. Write a function that performs a linear search on an array.


function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index of the target element if found
        }
    }
    return -1; // Return -1 if the target element is not found in the array
}

// Example usage:
const array = [1, 3, 5, 7, 9];
const targetElement = 5;
const resultIndex = linearSearch(array, targetElement);
if (resultIndex !== -1) {
    console.log(`Element ${targetElement} found at index ${resultIndex}`);
} else {
    console.log(`Element ${targetElement} not found in the array`);
}
