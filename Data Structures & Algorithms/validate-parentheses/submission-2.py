# logic if the bracket is opening bracket push to stack, if you encounter closing bracket pop the last opening bracket from stack and check if the form valid pair,
# if not then return false, 
# at the end of loop if  stack is empty then it means the expression is valid

class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        bracket_pair = {
            '[':']',
            '{':'}',
            '(':')'
        }

        for bracket in s:
            if bracket in bracket_pair:
                stack.append(bracket)
            else:
                if len(stack) == 0:
                    return False
                elif bracket_pair[stack.pop()] == bracket:
                    continue
                else: 
                    return False
        
        return len(stack) == 0
            
        