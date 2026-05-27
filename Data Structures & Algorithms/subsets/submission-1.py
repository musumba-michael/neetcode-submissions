class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        """
        []
        [] [1]
        [] [1] [2] [1, 2]
        [] [1] [2] [1, 2] [3] [1, 3] [2, 3] [1, 2, 3]
        """
        result = [[]]

        for num in nums:
            result += [curr + [num] for curr in result]
        
        return result