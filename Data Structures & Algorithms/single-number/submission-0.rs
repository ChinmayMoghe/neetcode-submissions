impl Solution {
    pub fn single_number(nums: Vec<i32>) -> i32 {
        let mut odd_one_out:i32=nums[0];

        for  i in (1..nums.len()) {
            odd_one_out ^= nums[i];
        }
        odd_one_out
    }
}

/*



*/


