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
                    let seenLen = 0;
                    const found = this.dfs(board, row, col, visited,idx,seenLen,word);
                    if(found) {return true;}
                }
            }
        }
        return false;
    }

    dfs(board, row, col, visited, idx,seenLen,word) {
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
            seenLen+=1;
            const up = this.dfs(board,row-1, col,visited,idx,seenLen, word);
            const down = this.dfs(board,row+1, col,visited,idx,seenLen, word);
            const left = this.dfs(board,row, col-1,visited,idx,seenLen, word);
            const right = this.dfs(board,row, col+1,visited,idx,seenLen, word);
            visited.delete(`${row}#${col}`);
            return up || down || left || right;
        } else {
            return false;
        }
        
    }
}
