/*
 * @lc app=leetcode.cn id=275 lang=javascript
 *
 * [275] H指数 II
 */
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    if (citations.length === 0) return 0
    citations.sort((a, b) => b-a)    
    for (let i = 0; i<citations.length; i++) {
        let flag = true;
        for (let j = 0; j<=i;j++) {
            if (citations[j] < i+1) {
                flag = false;
                break;
            }

        }
        if (flag === false) return i
    }
    return citations.length  
};

