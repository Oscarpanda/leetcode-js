/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 */
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let i = 0;
    let result = [];
    while(i<chars.length) {

        if (i+1<chars.length) {
            let count = 1
            while(chars[i] === chars[i+1]) {
                i++;
                count++
            }
            if (count > 1) {
                result.push(chars[i])
                result.push(count)
                i++
            }else {
                result.push(chars[i])
                i++
            }

        } else if(i === chars.length - 1) {
                result.push(chars[i])
                i++
        }

    }
    let nums  = ""
    for (let i = 0;i <result.length;i++) {
        nums+=result[i]

    }
    console.log(nums)
    chars.splice(0, chars.length)
    

    let temp = nums.split("");
    temp.forEach((item) => {
        chars.push(item)
    })
};

