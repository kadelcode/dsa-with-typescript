// This function is used to find the maximum number in an array of numbers
// Takes an array of numbers as input and returns the maximum number found
export function findMax(arr: number[]): number {
  // Initialize 'max' with the first element of the array
  // This assumes the array is not empty
  let max = arr[0];

  // Loop through each element in the array
  for (const num of arr) {
    // If the current number is greater than 'max', update 'max'
    if (num > max) max = num;
  }

  return max;
}

// Example
// console.log(findMax([2, 3, 1, 40]));
