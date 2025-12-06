// Function to reverse the elements of an array in place
// Takes an array of numbers as input and returns the reversed array
export function reverseArray(arr: number[]): number[] {
  // Initialize a pointer `left` at the start of the array (index 0)
  let left = 0;
  // Initialize a pointer `right` at the end of the array (last index)
  let right = arr.length - 1;

  // Loop until the `left` pointer is no longer less than the `right` pointer
  while (left < right) {
    // Swap the elements at the `left` and `right` pointers using array destructuring
    // This swaps the values without needing a temporary variable
    [arr[left], arr[right]] = [arr[right], arr[left]];

    left++; // Move the `left` pointer one step forward
    right--; // Move the `right` pointer one step backward
  }

  // Return the reversed array
  return arr;
}
