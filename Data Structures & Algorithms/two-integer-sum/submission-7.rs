impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        // two pointer

        let mut a: Vec<(usize, i32)> = nums.iter()
            .copied()
            .enumerate()
            .collect();

        a.sort_by_key(|a_elm| a_elm.1);

        let mut i = 0;
        let mut j = a.len() - 1;
        
        while i < j {
            let sum = a[i].1 + a[j].1;

            if sum == target{
                return vec![
                    a[i].0.min(a[j].0) as i32,
                    a[i].0.max(a[j].0) as i32,
                ];
            }else if sum > target {
                j -= 1;
            }else{
                i += 1;
            }
        }

        vec![]
    }
}
