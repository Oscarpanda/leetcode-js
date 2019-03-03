/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map  = new Map();
    for (let i = 0; i<s.length;i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1)
        } else {
            map.set(s[i], 1)
        }
    }
    console.log(map)
    let sum = 0;
    let flag = true 
    map.forEach((item, index) => {
        console.log(item, index)
        if (item > 1 && item % 2 === 0) {
            sum +=item;
        }
        if (item > 1 && item % 2 === 1) {
            sum +=item -1;
        }
        if (item === 1 && flag === true) {
            sum += 1
            flag = false
        }
        
    })
    return sum;
    
};
longestPalindrome ("dccaccd")