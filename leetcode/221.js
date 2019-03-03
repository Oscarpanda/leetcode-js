var maximalSquare = function(matrix) {
  if(matrix.length === 0) return 0;
  const m = matrix.length;
  const n = (matrix[0] || []).length;
  const dp = Array(m).fill().map(() => Array(n).fill(0));
  let max = 0;

  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if(matrix[i][j] == 1) {
              dp[i][j] = 1 + Math.min(
                  ((dp[i-1] || [])[j-1] || 0),
                  ((dp[i] || [])[j - 1] || 0),
                  ((dp[i - 1] || [])[j] || 0));
              max = Math.max(max, dp[i][j]);
          }
      }
  }
  return max ** 2;
};
maximalSquare([
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]])