import { reverseArray } from '../reverseArray';

describe('reverseArray', () => {
  it('should reverse an array with multiple elements', () => {
    const input = [1, 2, 3, 4, 6];
    const expected = [6, 4, 3, 2, 1];
    expect(reverseArray(input)).toEqual(expected);
  });
});
