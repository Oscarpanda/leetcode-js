/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let len = g.length;
    g.sort((a,b) => a-b)
    s.sort((a,b) => a-b)
    let cookie = 0;
    let child = 0;
    while(cookie < s.length && child < g.length) {
        if (s[cookie]>=g[child]) {
            child++
            cookie++
        } else {
            cookie++
        }
    }
    return child 
};
findContentChildren([1,2,3],[1,1])

