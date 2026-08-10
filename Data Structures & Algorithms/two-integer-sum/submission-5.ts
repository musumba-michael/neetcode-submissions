class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const diff = new Map<number, number>();

        for (const [index, num] of nums.entries()) {
            if (diff.has(num)) {
                return [diff.get(num)!, index];
            }

            diff.set(target - num, index);
        }

        return [];
    }
}