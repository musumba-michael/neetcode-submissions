# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        def depth(root):
            if not root:
                return 0

            left_depth = depth(root.left)
            right_depth = depth(root.right)

            # Calculate the diameter of the tree rooted at this node
            self.diameter = max(self.diameter, left_depth + right_depth)

            return max(left_depth, right_depth) + 1
        
        self.diameter = 0  # Initialize the diameter to 0
        depth(root)  # Start the depth calculation
        return self.diameter