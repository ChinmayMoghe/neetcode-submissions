class Solution:
    def trap(self, height: List[int]) -> int:
        left_max_heights = [0]*len(height)
        right_max_heights = [0]*len(height)

        for i in range(0,len(height)):
            if i == 0:
                continue

            left_max_heights[i] = max(left_max_heights[i - 1], height[i - 1])


        for i in range(len(height) - 1, -1, -1):
            if i == len(height) - 1:
                continue

            right_max_heights[i] = max(right_max_heights[i+1], height[i + 1])
        
        total_trapped_water = 0
        for i in range(0,len(height)):
            trapped_water_at_pos = min(left_max_heights[i],right_max_heights[i]) - height[i]

            if trapped_water_at_pos > 0:
                total_trapped_water+= trapped_water_at_pos;
        
        return total_trapped_water
