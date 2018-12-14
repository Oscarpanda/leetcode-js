var flipAndInvertImage = function(A) {
    A.forEach((item, index) => {
        let B = item.reverse();
        let b = item.map((ar) => {
            return ar ? 0:1
        })
        A[index] = b
    })
    return A;
};
flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]])