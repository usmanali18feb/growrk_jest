import { sum, findPair } from './index';

describe('sum function', () => {
  test('adds two numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  test('adds multiple numbers', () => {
    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  test('handles negative numbers', () => {
    expect(sum(-1, -2, 3, 4)).toBe(4);
  });

  test('handles an empty array', () => {
    expect(sum()).toBe(0);
  });
});

describe('findPair function', () => {
  test('returns an empty array for no pairs', () => {
    expect(findPair([1, 2, 3, 4, 5], 10)).toEqual([]);
  });

  test('handles negative numbers', () => {
    expect(findPair([-1, -2, 3, 4], 1)).toEqual([[-2, 3]]);
  });

  test('returns an empty array for an empty input array', () => {
    expect(findPair([], 5)).toEqual([]);
  });

  test('handles duplicate numbers within a pair', () => {
    expect(findPair([4, 4], 8)).toEqual([[4, 4]]);
  });
});
