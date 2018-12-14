/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    let strArr = S.split('');
    let Arr = [...new Array(s.length)].map((item,index) => index)
    let result = [];
    strArr.forEach((item) => {
        if (item === "I") {
            result.push(Arr.shift())
        } else {
            result.push(Arr.pop())
        }
    })
    return result
};
a = diStringMatch("IDID");
