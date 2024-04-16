// 3. Explain the concept of Big O notation and analyze the time complexity of the linear and binary search algorithms.


// Big O notation is a mathematical notation used in computer science to describe the performance or complexity of an algorithm. It provides an upper bound on the growth rate of the function that represents the algorithm's time complexity in terms of the input size.

// In Big O notation:

// O(1) represents constant time complexity, meaning the time taken by the algorithm does not change with the size of the input.
// O(n) represents linear time complexity, where the time taken by the algorithm grows linearly with the size of the input.
// O(log n) represents logarithmic time complexity, where the time taken by the algorithm grows logarithmically with the size of the input.
// O(n^2), O(n^3), etc., represent polynomial time complexity, where the time taken by the algorithm grows polynomially with the size of the input.
// Now, let's analyze the time complexity of the linear and binary search algorithms:

// Linear Search:

// In the worst case, the linear search algorithm iterates through each element of the array once until it finds the target element or reaches the end of the array.
// Therefore, the time complexity of the linear search algorithm is O(n), where n is the size of the input array.
// Binary Search:

// In each iteration of the binary search algorithm, the search interval is divided in half, effectively reducing the search space by half.
// Therefore, the time complexity of the binary search algorithm is O(log n), where n is the size of the input array.


// Linear Search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index of the target element if found
        }
    }
    return -1; // Return -1 if the target element is not found in the array
}

// Binary Search
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


const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];

const targetElementLinear = 7;
const resultIndexLinear = linearSearch(sortedArray, targetElementLinear);
if (resultIndexLinear !== -1) {
    console.log(`Element ${targetElementLinear} found at index ${resultIndexLinear} using linear search`);
} else {
    console.log(`Element ${targetElementLinear} not found in the array`);
}

const targetElementBinary = 11;
const resultIndexBinary = binarySearch(sortedArray, targetElementBinary);
if (resultIndexBinary !== -1) {
    console.log(`Element ${targetElementBinary} found at index ${resultIndexBinary} using binary search`);
} else {
    console.log(`Element ${targetElementBinary} not found in the array`);
}
