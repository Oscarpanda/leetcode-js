/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    let copynums = nums.slice(0);
    let rank = copynums.sort((a, b) => {
        return b-a 
    })
    for (let i = 0 ; i < nums.length; i++) {
        let val = nums[i];
        for (let j = 0; j<rank.length; j++) {
            if (rank[j] === val) {
                let result = ""
                if (j === 0) {
                    result = "Gold Medal";
                } else if (j === 1){
                    result = "Silver Medal";
                } else if (j === 2){
                    result = "Bronze Medal";
                }else {
                    result = (j + 1).toString();
                }
                nums[i] = result
                break;
            }
        }
    }
    return nums
};
findRelativeRanks([10,3,8,9,4])

