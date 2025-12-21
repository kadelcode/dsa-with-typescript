import { findMax } from '../findMax';

describe('findMax', () => {
  // Test case 1: Normal array with positive numbers
  it('should return the maximum number in a normal array', () => {
    const arr = [1, 3, 2, 5, 4];
    expect(findMax(arr)).toBe(5);
  });

  // Test case 2: Array with negative numbers
  it('should return the maximum number in an array with negatives', () => {
    const arr = [-1, -3, -2, -5, -4];
    expect(findMax(arr)).toBe(-1);
  });

  // Test case 3: Array with a single element
  it('should return the single element in a single-element array', () => {
    const arr = [42];
    expect(findMax(arr)).toBe(42);
  });

  // Test case 4: Array with duplicate maximum values
  it('should return the maximum number in an array with duplicates', () => {
    const arr = [1, 3, 5, 5, 2];
    expect(findMax(arr)).toBe(5);
  });
});
