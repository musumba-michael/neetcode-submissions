class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // seen hashmap
        // set and check if num in set
        // brute force with nested loops

        // using set
        let set = new Set<number>()
        for (const num of nums){
            if (set.has(num)) return true;
            set.add(num);
        }
        return false;
    }
}
