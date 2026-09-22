impl Solution {
    pub fn has_duplicate(nums: Vec<i32>) -> bool {
        let nums_set: HashSet<i32> = nums.iter().copied().collect();
        nums.len() > nums_set.len()
    }
}
