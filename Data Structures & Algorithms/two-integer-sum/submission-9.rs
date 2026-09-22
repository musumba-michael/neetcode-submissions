impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut seen = HashMap::new();

        for (i, &n) in nums.iter().enumerate(){
            let diff = target - n;

            if let Some(&index) = seen.get(&diff){
                return vec![index as i32, i as i32];
            }
            seen.insert(n, i);
        }
        vec![]
    }
}