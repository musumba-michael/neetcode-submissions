class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // seen hashmap
        // set and check if num in set
        // brute force with nested loops

        // using seen hashmap
        let seen = {};
        for (const num of nums){
            if(seen[num]) return true
            seen[num] = true
        }
        return false;
    }
}
