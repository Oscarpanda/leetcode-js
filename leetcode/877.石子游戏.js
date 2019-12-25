/*
 * @lc app=leetcode.cn id=877 lang=javascript
 *
 * [877] 石子游戏
 */
/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
   let maxsocre = (piles) => {
     if (piles.length <= 2) return Math.max(...piles);
     let last = piles[piles.length - 1];
     let start = piles[0];
     let lastlastArr = piles.slice(0, piles.length - 2)
     let lastfirstArr = piles.slice(1, piles.length - 1)
     let firstfirstArr = piles.slice(2, piles.length)
     let firstlastArr = piles.slice(1, piles.length -1)
     resultlast1 = last + maxsocre(lastlastArr );
     resultlast2 = last + maxsocre(lastfirstArr );
     resultstart1 = start+ maxsocre(firstfirstArr );
     resultstart2 = start+ maxsocre(firstlastArr );
     return result = Math.max(resultstart1 ,resultstart2, resultlast1, resultlast2) 
   };
   let a = maxsocre(piles);
   let sum = piles.reduce((a, b) => a+b);
   if (sum - a < a) {
     return true
   }else {
    return false
   } 

};
// stoneGame([3,4,20,10,4,2,2,6,12,2,14,11,19,19,10,1,6,9,6,15])
stoneGame([3,4,20,10])

