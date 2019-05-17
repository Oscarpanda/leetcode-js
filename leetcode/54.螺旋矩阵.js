/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  fun.result = [];
  if (matrix.length === 0) return []
    
  let arr = ["step1", "step2", "step3", "step4"];
  for (let i =0; i<arr.length;i === 3? i = 0: i++) {
    matrix = fun[arr[i]](matrix)
    if (matrix.join("") === "") {
      return fun["result"];
    }
    
  }
};
var fun = {
  result: [],
  step1: function(matrix) {
    this.result = this.result.concat(matrix.shift());

    return matrix
  },
  step2: function(matrix) {
    for (let i = 0; i<matrix.length; i++) {
      this.result.push(matrix[i].pop())
    }
    return matrix
  },
  step3: function(matrix) {
    let temp = matrix.pop();
    this.result = this.result.concat(temp.reverse());
    return matrix
  },
  step4: function(matrix) {
    for (let i = matrix.length - 1; i>=0; i--) {
      this.result.push(matrix[i].shift())
    }
    return matrix
  },

}
// spiralOrder([[7],[9],[6]])

