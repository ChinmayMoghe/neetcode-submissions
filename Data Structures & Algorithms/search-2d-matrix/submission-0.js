class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        //search for row that will have the element
        let top = 0;
        let bottom = matrix.length - 1;

        let foundRow = [];

        while(top <= bottom) {
            let mid = top + Math.trunc((bottom - top) / 2);
            const row = matrix[mid];
            if(target >= row[0] && target <= row[row.length - 1]) {
                foundRow = row;
                break;
            } else if (target < row[0]) {
                bottom = mid - 1; 
            } else if(target > row[row.length - 1]) {
                top = mid+1;
            }
        }
        if(foundRow.length === 0) {
            return false;
        }

        let left = 0;
        let right = foundRow.length - 1;
        while(left<=right) {
            let mid = left + Math.trunc((right - left) / 2);

            if(target < foundRow[mid]) {
                right = mid - 1;
            } else if (target > foundRow[mid]) {
                left = mid + 1;
            } else {
                return true; // found the damn thingy
            }
        }

        return false; // not found anything

    }
}

/*
m x n array 

find target in mxn array 

[
[1,2,4,8],
[10,11,12,13],
[14,20,30,40]
]
target = 10

so 2 problems , which row will have the target and which column has the target 

m=0 , n=0 ->

 m=2, n = 3

one option is to search the whole space by binary search log(m*n)

else 

split into two 

1. search row -> log(m)
2. search column within the found row -> log(n)

Same complexity in both cases log(m*n)


*/