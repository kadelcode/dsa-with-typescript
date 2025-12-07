import { reverseArray } from '../reverseArray';

describe('reverseArray', () => {
  it('should reverse an array with multiple elements', () => {
    const input = [1, 2, 3, 4, 6];
    const expected = [6, 4, 3, 2, 1];
    expect(reverseArray(input)).toEqual(expected);
  });

  it('should reverse an array with even number of elements', () => {
    const input = [10, 20, 30, 40];
    const expected = [40, 30, 20, 10];
    expect(reverseArray(input)).toEqual(expected);
  });

  it('should return the same array if it has only one element', () => {
    const input = [8];
    const expected = [8];
    expect(reverseArray(input)).toEqual(expected);
  });

  it('should return an empty array if the input is empty', () => {
    const input: number[] = [];
    const expected: number[] = [];
    expect(reverseArray(input)).toEqual(expected);
  });

  it('should modify the original array', () => {
    const input = [1, 2, 3];
    const originalInput = [...input];
    reverseArray(input);
    expect(input).not.toEqual(originalInput);
  });
});
