/*
 * @lc app=leetcode.cn id=733 lang=javascript
 *
 * [733] 图像渲染
 */
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  var target = image[sr][sc]
  if (target === newColor) {
    return image
  }
  digui(image, sr, sc, newColor, target)
  return image
    
};
var digui = function(image, sr, sc, newColor, target) {
  image[sr][sc] = newColor;

  if (sr - 1 >=0) {
    if (image[sr - 1][sc] === target) {
      digui(image, sr - 1, sc, newColor, target)
    }

  }
  if (sr + 1 <= image.length - 1) {
    if (image[sr + 1][sc] === target) {
      digui(image, sr + 1, sc, newColor, target)
    }
  }
  if (sc + 1 <= image[0].length - 1) {
    if (image[sr][sc + 1] === target) {
      digui(image, sr, sc + 1, newColor, target)
    }
  }
  if (sc - 1 >= 0) {
    if (image[sr][sc - 1] === target) {
      digui(image, sr, sc - 1, newColor, target)
    }
  }
}
// floodFill([[0,0,0],[0,1,1]], 1, 1,1)

