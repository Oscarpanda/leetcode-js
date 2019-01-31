var numberOfArithmeticSlices = function(A) {
    
    let result = [];
    let check = (arrs,arr) => {
        for (let i = 0;i<arrs.length;i++) {
            if (arrs[i].join("") === arr.join("")) {
                return false
            }
        }
        return true;

    };
    for (let i = 0;i<A.length - 2;i++) {
        let cha = A[i+1] - A[i]
        let j = i+1;
        let temp = [A[i],A[i+1]]
        while(A[j+1] - A[j] === cha && j+1<A.length)  {
            temp.push(A[j+1])
            // if (check(result, temp)) {
                result.push(temp.slice())
            // }
            j ++;
        }

    }
    console.log(result)
};
numberOfArithmeticSlices([1,2,3,4])