/*
 * @lc app=leetcode.cn id=274 lang=javascript
 *
 * [274] H指数
 */
/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = function(citations) {
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
hIndex([1])

