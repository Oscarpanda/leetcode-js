var numTrees = function(n) {
    
    let nArr = [...new Array(n)].map((item, index) => index +1)
    console.log(nArr)
    let sum = 0
    let hash = {}
    digui = (n, s) => {
        if (n === 1 || n===0) {
            return 1
        }
        for (let i = 1;i<=n;i++) {
            let z = digui(i-1, 0) * digui(n-i, 0)
            console.log(z);
            s += z
        }
        return s
    }
    let result = digui(n, 0)
    console.log(result)
};
numTrees(2)