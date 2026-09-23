impl Solution {
    pub fn single_number(nums: Vec<i32>) -> i32 {
        let mut odd_one_out:i32=0;

        for  num in &nums {
            odd_one_out ^= num;
        }
        odd_one_out
    }
}

/*



*/


