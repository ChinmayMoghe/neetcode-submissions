class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        n = len(board)
        rows = [[0]*n for _ in range(0,n)]
        cols = [[0]*n for _ in range(0,n)]
        boxes = [[0]*n for _ in range(0,n)]
        
        for i in range(0,n):
            for j in range(0,n):
                if board[i][j] != '.':
                    num = int(board[i][j]) - 1;
                    boxIdx = (i // 3) * 3 + (j // 3);
                    if rows[i][num] or cols[j][num] or boxes[boxIdx][num]:
                        return False;
                    rows[i][num] = cols[j][num] = boxes[boxIdx][num] = 1
        return True





# Solution 

# Valid Sudoku -> 9 x 9 

# Check existing rows and columns and 3 x 3 squares 

# For each row, check if there are duplicates -> satisfies 1.
# For each col, check if there are duplicates -> satisfies 2. 
# For each 3x3 square, check if there are duplicates -> satisfies 3. 

# Loop over elements of the input array

# length of input array -> number of rows 
# length of single array -> number of cols 

# For boxes of 3x3 , we want to flatten a 9x9 grid into a linear grid

# Say indices (0,0) (0,2), (2,0) (2,2) form a boundary of first box we want to make sure they all map to a single unique index 

# For flattening a 9x9 grid into a 3x3 grids, we have a formula which is effective 

# 0 | 1 | 2
# --+---+---
# 3 | 4 | 5
# --+---+---
# 6 | 7 | 8
# --+---+---


#  row = i  /  3
#  col = j /  3

# logic for this is row idx should collapse to 0 when the indices are in box 0 
# same goes for col idx
# Consider r,c = 2,2
# Math.floor( 2/3) = 0, Math.floor(2/3) = 0 

# lets select r,c = 4,5
# row = 4 / 3 = 1
# col = 5 / 3 = 1

# 4,5 belongs to block 4 not 1, how do we fix that ?  By having a offset 

# we can see that for r= 0,1,2 row=0, r = 3,4,5 row = 1, r =6,7,8 row = 2
# same goes for columns 
# we need to multiply by N / K so that we move the row forward as we travel through the grid from top to bottom 






