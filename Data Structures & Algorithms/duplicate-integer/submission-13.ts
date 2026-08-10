class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // seen hashmap
        // set and check if num in set
        // brute force with nested loops

        // using ruteforce
        for(let i = 0; i < nums.length - 1; i++){
            for(let j = i + 1; j < nums.length; j++){
                if (nums[i] === nums[j]) return true;
            }
        }
        return false;
    }
}
