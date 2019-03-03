var countOne = function(n) {
    let strn = n.toString();
    strnA = strn.split('');
    let result = ''
    while(strnA.length > 0) {
        let temp = strnA.shift();
        let len = 1;
        while(temp === strnA[0]) {
            strnA.shift()
            len += 1;
            
        }
        let first = len.toString();
        let last = temp
        let name = first + last
        result += name
    }
    return parseInt(result)
    
};
console.log(countOne(31131211131221) )