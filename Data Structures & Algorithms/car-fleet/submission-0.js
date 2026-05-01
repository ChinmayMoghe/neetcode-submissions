class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
      const grouped = [];
      for(let i=0;i<position.length;i++) {
        grouped.push([position[i],speed[i]]);
      }

      // sort by positions
      grouped.sort((a,b)=> b[0] - a[0]);
      
      const stack = [];

      for(let group of grouped) {
        const [position,speed] = group;
        const timeToReachTarget = (target - position) / speed;
        stack.push(timeToReachTarget);
        if(stack.length >=2 && stack.at(-1) <= stack.at(-2)) {
            stack.pop();
        }
      }

      return stack.length; 
    }
}
