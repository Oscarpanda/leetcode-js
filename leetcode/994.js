/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let checkover = (grid) => {
        for (let i = 0; i<grid.length;i++) {
            
        for (let j = 0; j<grid[0].length;j++) {
            if(grid[i][j] === 1) {
                return false
            }
        }
    }
        return true    
    }
    let impossible = (grid) => {
        for (let i = 0; i<grid.length;i++) {
            for (let j = 0; j<grid[0].length;j++) {
                if(grid[i][j] === 1) {
                    let flag = true
                    if(i+1 < grid.length &&  grid[i+1][j] !== 0) {
                        flag = false
                    }
                    if(i-1 >=0   && grid[i-1][j] !== 0) {
                        flag = false
                    }
                    if(j+1< grid[0].length && grid[i][j+1] !== 0) {
                        flag = false
                    }
                    if(j-1>= 0 && grid[i][j-1] !== 0) {
                        flag = false
                    }
                    if (flag) {
                        return flag
                    }
                }
            }
        }

    }
    let find2 = (grid) => {
        let copy = JSON.parse(JSON.stringify(grid))
        for (let i = 0; i<grid.length;i++) {
            for (let j = 0; j<grid[0].length;j++) {
                if(grid[i][j] === 2) {
                    if(i+1 < grid.length &&  grid[i+1][j] === 1) {
                       copy[i+1][j] = 2 
                    }
                    if(i-1 >=0   && grid[i-1][j] === 1) {
                       copy[i-1][j] = 2 
                    }
                    if(j+1< grid[0].length && grid[i][j+1] === 1) {
                       copy[i][j+1] = 2 
                    }
                    if(j-1>= 0 && grid[i][j-1] === 1) {
                       copy[i][j-1] = 2 
                    }
                }
            }
        }
        return copy
    }
    let step = 0    
    if(impossible(grid)) {
        return -1
    }
    while(1) {
        if (checkover(grid)) {
            return step
        }
        step ++
        grid = find2(grid)
    }
    
};
orangesRotting([[2,1,1],[0,1,1],[1,0,1]])