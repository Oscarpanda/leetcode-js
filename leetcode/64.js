/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    
    let obj  = {
        y:grid.length-1,
        x:grid[0].length-1 
    }
    let temp = [obj]
    while (1) {
        if (temp.length ===0 ) {
            return grid[0][0]
        }
        let newArr = [];
        for (let i = 0;i<temp.length;i++) {
            let o = temp[i];
            let origin = grid[o.y][o.x];
            let a = o.y + 1<grid.length ? grid[o.y +1][o.x]:null
            let b = o.x + 1<grid[0].length ? grid[o.y][o.x+1]:null
            if (a !== null && b!==null) {
                grid[o.y][o.x] = Math.min(a,b) +grid[o.y][o.x] 
            } else if (a !== null && b===null)  {
                grid[o.y][o.x] = a +grid[o.y][o.x] 

            } else if (a === null && b!==null) {
                grid[o.y][o.x] = b +grid[o.y][o.x] 

            }
            if (o.y -1 >=0) {
                let z = {
                    y: o.y-1,
                    x: o.x,
                }
                newArr.push(z)
            }
            // if (o.x -1 >=0) {
            //     let z = {
            //         y: o.y,
            //         x: o.x-1,
            //     }
            //     newArr.push(z)
            // }
            if (i === temp.length - 1) {
                if (o.x -1 >=0) {
                    let z = {
                        y: o.y,
                        x: o.x-1,
                    }
                    newArr.push(z)
                }

            }
        }
        temp = newArr
        
    }
    
};
minPathSum([ [1,3,1],
    [1,5,1],
    [4,2,1]])