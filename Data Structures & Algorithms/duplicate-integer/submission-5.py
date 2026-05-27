class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        elements = {}

        for num in nums:
            if num in elements.keys():
                return True
            elements[num] = True
        
        return False