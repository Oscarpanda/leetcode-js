/*
 * @lc app=leetcode.cn id=999 lang=javascript
 *
 * [999] 车的可用捕获量
 */
/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let RPosition;
    let PPosition = [];
    let BPosition = [];
    board.forEach((item, index1) => {
      item.forEach((z, index2) => {
        if (z === "R") {
          RPosition = [index1, index2]
        }
      })
    })
    let result = 0
    let x = RPosition[0];
    while(x>0) {
      if (board[x][RPosition[1]] === "p") {
        result += 1
        break;
      }
      if (board[x][RPosition[1]] === "B") {
        break;
      }
      x--
    }
    x = RPosition[0];
    while(x<8) {
      if (board[x][RPosition[1]] === "p") {
        result += 1
        break;
      }
      if (board[x][RPosition[1]] === "B") {
        break;
      }
      x++
    }
    let y = RPosition[1];
    while(y<8) {
      if (board[RPosition[0]][y] === "p") {
        result += 1
        break;
      }
      if (board[RPosition[0]][y] === "B") {
        break;
      }
      y++
    }
    y = RPosition[1];
    while(y>0) {
      if (board[RPosition[0]][y] === "p") {
        result += 1
        break;
      }
      if (board[RPosition[0]][y] === "B") {
        break;
      }
      y--
    }
    console.log(result)
    return result;
};


