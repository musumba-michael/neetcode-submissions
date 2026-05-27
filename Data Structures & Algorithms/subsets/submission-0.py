class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        length = len(nums)
        result = []
        subset = []
        def dfs(i):
            if i >= length:
                result.append(subset.copy())
                return

            # add the element at the current index
            subset.append(nums[i])
            dfs(i + 1)

            # don't add element at current index
            subset.pop()
            dfs(i + 1)
        
        dfs(0)
        return result
