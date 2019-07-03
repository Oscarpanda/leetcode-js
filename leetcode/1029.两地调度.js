/*
 * @lc app=leetcode.cn id=1029 lang=javascript
 *
 * [1029] 两地调度
 */
/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    
    let N = costs.length / 2
    costs.sort((a,b) => Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]));
    console.log(costs);
    let a = 0;
    let b = 0;
    let num = 0
    let result = 0;
    while(a < N && b <N && num <2*N) {
        if (costs[num][0] <= costs[num][1]) {
            a++
            result += costs[num][0];
            num++
        } else {
            b++
            result += costs[num][1];
            num++
        }
    }
    if (a === N) {
        while(b <N && num <2*N) {
                b++
                result += costs[num][1];
                num++
        }

    }
    if (b === N) {
        while(a <N && num <2*N) {
                a++
                result += costs[num][0];
                num++
        }

    }
    return result
};
twoCitySchedCost([[10,20],[30,200],[400,50],[30,20]])

