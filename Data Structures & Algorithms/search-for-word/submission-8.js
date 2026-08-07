class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        for (let row=0;row<board.length;row++) {
            for(let col=0;col<board[0].length;col++) {
                if(board[row][col] === word[0]) {
                    let visited = new Set(); // maintain a visited nodes set
                    let idx = 0;
                    const found = this.dfs(board, row, col, visited,idx,word);
                    if(found) {return true;}
                }
            }
        }
        return false;
    }

    dfs(board, row, col, visited, idx,word) {
        if(idx === word.length) {return true;}

        if(row < 0 || row > board.length - 1) {
            return false;
        }

        if(col < 0 || col > board[0].length - 1) {
            return false; 
        }

        if(visited.has(`${row}#${col}`)){
            return false;
        }
        
       

        if(board[row][col] === word[idx]) {
            visited.add(`${row}#${col}`);
            idx+=1;
            const up = this.dfs(board,row-1, col,visited,idx, word);
            const down = this.dfs(board,row+1, col,visited,idx, word);
            const left = this.dfs(board,row, col-1,visited,idx, word);
            const right = this.dfs(board,row, col+1,visited,idx, word);
            visited.delete(`${row}#${col}`);
            return up || down || left || right;
        } else {
            return false;
        }
        
    }
}
