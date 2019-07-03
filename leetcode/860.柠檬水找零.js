/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    
    let d5 = 0;
    let d10 = 0;
    let d20 = 0;
    for (let i = 0;i <bills.length;i++) {
        if (bills[i] === 5) {
            d5+=1
        } else if (bills[i] === 10) {
            d10+=1
            if (d5 === 0) {
                return false
            } else{
                d5 -= 1
            }
        } else if (bills[i]===20) {
            d20+=1;
            if (d10 >=1 && d5>=1) {
                d10 -= 1
                d5 -= 1
            } else if (d10 === 0 && d5>=3) {
                d5-=3

            } else {
                return false
            }
        }
    }
    return true
};

