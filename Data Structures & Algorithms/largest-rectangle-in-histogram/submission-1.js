class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const heightMap = heights.map((val,idx)=>[idx,val]);
        const stack = [];
        
        let maxArea = 0;

        for(const [i,h] of heightMap) {
            let start = i;
            while(stack.length && stack.at(-1)[1] > h) {
                const [idx,height] = stack.pop();
                start = idx;
                maxArea = Math.max(maxArea, height* (i - start));
            }
            stack.push([start,h]);
        }

        for(const [i,h] of stack) {
            maxArea = Math.max(maxArea, h*(heights.length - i))
        }

        return maxArea
    }
}


/*
One pass optimized stack approach 

1. We map heights against its index
2. Main logic depends on the fact that if the values are strictly increasing 

for example. 1-> 2 -> 3 -> 4 -> every element can extend till the end 

and effectively area of rectangle would be h * (len - i) - i is index of the current element 

3. But what happens if we have a smaller element 


*/