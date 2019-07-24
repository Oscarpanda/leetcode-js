/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
   let result = [];
   if (cost.length === 0) return 0
   if (cost.length === 1) {
     result[0] = cost[0]
   }
   if (cost.length >= 2) {
     result[0] = cost[0]
     result[1] = cost[1];
   }
   for (let i = 2; i < cost.length;i++) {
      result[i] = Math.min(result[i-2]+cost[i], result[i-1] + cost[i])
     }
   return Math.min(result[result.length - 1],result[result.length-2]);
};

minCostClimbingStairs([0,0,1,1])
