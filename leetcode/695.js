var maxAreaOfIsland = function(grid) {
  let chang = grid[0].length;
  let kuang = grid.length;
  let digui = (gird, x, y) => {
    let sum = 0
    if (gird[y][x] === 1) {
      sum = 1
      gird[y][x] = 0 
      if (x + 1 < chang && gird[y][x+1] === 1) {
        sum +=digui(gird, x+1, y )
      }
      if (y + 1 < kuang && gird[y+1][x] === 1) {
        sum +=digui(gird, x, y +1 )
      }
      if (y - 1 >= 0 && gird[y-1][x] === 1) {
        sum+=digui(gird, x, y -1 )
      }
      if (x - 1 >= 0 && gird[y][x-1] === 1) {
        sum+=digui(gird, x+1, y )
      }

    }
    return sum
  }
  let max= 0
  for (let i = 0 ;i< grid.length; i++ ) {

    for (let j = 0 ;j< grid[i].length; j++ ) {
      let sum = digui(grid, j, i)
      if (sum > max) {
        max = sum
      }
    }
  }
  console.log(max)
    
};
maxAreaOfIsland([
 [0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]])