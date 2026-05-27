class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        # directions  left   right    up      down
        directions = [[1,0], [-1, 0], [0, 1], [0, -1]]
        
        # Length of rows and columns 
        ROWS, COLS = len(grid), len(grid[0])

        islands = 0

        def dfs(r, c):
            if r < 0 or c < 0 or c >= COLS or r >= ROWS or grid[r][c] == "0":
                return

            # mark cell as visited
            grid[r][c] = "0"
            # visit neighbors
            for dr, dc in directions:
                dfs(r + dr, c + dc)
        
        # Interate through elements in the grid, if the element is a 1 mark it as visited and then mark all its neighbours as visited as well because the make up the same island
        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c] == "1":
                    dfs(r,c)
                    islands +=1
        
        return islands