class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for(const token of tokens) {
            //imp: use proper regex or 
            // isNaN
            if(!isNaN(token)) {
                stack.push(Number(token));
            } else if (token === '+') {
                const operand_2 = stack.pop();
                const operand_1 = stack.pop();
                stack.push(operand_1+operand_2);
            } else if (token === '-') {
                const operand_2 = stack.pop();
                const operand_1 = stack.pop();
                stack.push(operand_1 - operand_2);
            } else if (token === '/') {
                const operand_2 = stack.pop();
                const operand_1 = stack.pop();
                // imp: truncate - use it to truncate towards zero for both positive and negative numbers
                stack.push(Math.trunc(operand_1 / operand_2));
            }
             else if (token === '*') {
                const operand_2 = stack.pop();
                const operand_1 = stack.pop();
                stack.push(operand_1 * operand_2);
            }
        }

        return stack.pop();
    }
}
