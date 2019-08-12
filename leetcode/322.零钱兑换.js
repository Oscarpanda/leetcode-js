/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
//递归
var coinChange = function(coins, amount) {
    let db = [];
    db[0] = 0
    for (let i = 1; i<=amount;i++) {
        db[i] = 999999999;
        for (let j = 0; j<coins.length;j++) {
            if (i-coins[j] >= 0)  {
                db[i] = Math.min(db[i-coins[j]] + 1,db[i])
            }
        }
    }
    console.log(db)
    return db[amount] ===  999999999 ? -1 : db[amount]
}

var coinChange1 = function(coins, amount) {

    if (amount === 0) return 0
    if (amount < 1) return 1 
    let result

    let results = [];
    for (let i = 0 ; i<coins.length;i++) {
        if (amount - coins[i] >=0) {
            let temp = coinChange(coins, amount - coins[i]) + 1
            if (temp >0) {
                results.push(temp )
            }
        }
    }
    return results.length?Math.min(...results): -1
};

let a = new Date().getTime();
coinChange([1,2,5], 11)
let b = new Date().getTime();
console.log(b - a);
