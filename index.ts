export const sum = (...a: number[]) => a.reduce((acc, val) => acc + val, 0);

export function findPair(nums: number[], target: number): number[][] {
  let map = new Map();
  let result: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      result.push([target - nums[i], nums[i]]);
    } else {
      map.set(target - nums[i], true);
    }
  }
  return result;
}
