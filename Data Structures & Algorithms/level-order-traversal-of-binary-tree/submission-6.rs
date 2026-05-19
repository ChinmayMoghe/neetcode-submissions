// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//     pub val: i32,
//     pub left: Option<Rc<RefCell<TreeNode>>>,
//     pub right: Option<Rc<RefCell<TreeNode>>>,
// }
//
// impl TreeNode {
//     #[inline]
//     pub fn new(val: i32) -> Self {
//         TreeNode {
//             val,
//             left: None,
//             right: None,
//         }
//     }
// }

use std::rc::Rc;
use std::cell::RefCell;

impl Solution {
    pub fn level_order(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<Vec<i32>> {
        let mut result = vec![];
        let mut queue = VecDeque::new();
        
        if let Some(node) = root {
            queue.push_back(node);
        }

        while !queue.is_empty() {
            let size = queue.len();
            let mut level = Vec::with_capacity(size);

            for _ in 0..size {
                let node = queue.pop_front().unwrap();
                let node_ref = node.borrow();
                level.push(node_ref.val);

                if let Some(node_left) = node_ref.left.clone() {
                    queue.push_back(node_left);
                }

                if let Some(node_right) = node_ref.right.clone() {
                    queue.push_back(node_right);
                }
            }
            result.push(level);
        }
    result
    }
}
