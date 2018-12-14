var sortArrayByParity = function(A) {
    const result = [];
    A.forEach((item) => {
      let a = item % 2
        if (a == 0) {
            result.unshift(item)
        } else {
            result.pop(item)
        }
    })
    return result
};
sortArrayByParity([3,1,2,4])