class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for(const token of tokens) {
            if(/^-?\d+/.test(token)) {
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
