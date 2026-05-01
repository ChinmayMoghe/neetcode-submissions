class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const pse = [];
        const nse = [];
        let maxArea = 0;

        let stack = [];
       for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
        stack.pop();
    }
    // top of stack is now the nearest smaller to the left
    pse[i] = stack.length ? stack[stack.length - 1] : -1;
    
    stack.push(i);
}

  stack = [];
  for (let i = heights.length - 1; i > -1; i--) {
    while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
        stack.pop();
    }
    // top of stack is now the nearest smaller to the left
    nse[i] = stack.length ? stack[stack.length - 1] : heights.length;
    stack.push(i);
    
}


for (let i=0; i<heights.length;i++)  {
    maxArea = Math.max(maxArea, ((nse[i] - pse[i] - 1)) * heights[i]);
}

return maxArea;
    }

    
}


/*

Same idea as neetcode guy, but slightly different approach 

I am going with Previous smaller element and next smaller element approach here, 

the space complexity is O(2n) ~ O(n)
the time complexity  is O(2n) ~ O(n)

Let's break this down cleanly 

Area of rectangle  = width x height of rectangle 

we have to find the largest area of rectangle in histogram

A bar in histogram can be extended to left and right until it hits the previous or next smaller element 

For example. 

 0,1,2,3,4,5
[7,1,7,2,2,4]

For i = 3, num=2 I can consider it to extend until i=2 since 7 can cover the 2 but not 1 as we extend height 2 towards left

For i = 2, num = 7, I can only consider width of the bar itself since next element 2 is smaller than 7

So for each element in the array we need to find the previous smaller element and next smaller element which could determine until which point I can extend the 
height of bar at any give index 

Edge cases: What if there is no smaller element to left or right ? 

For example At i=1, num=1, there is no smaller element towards right in that case we cap the next smaller element to the end index of array
For any element that does not have a previous smaller element we keep the same index to make width calculation intuitive 


*/