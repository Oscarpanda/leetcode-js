var scoreOfParentheses = function(S) {
    let digui = (S, l, r) => {
        if (r - l === 1)  {
            return 1
        }
        let b = 0;
        if (let i = l; i< r; i++) {
            if (S[i] === "(") {
                b++;
            }
            if (S[i] === ")") {
                b--;
            }
            if (b === 0) {
                return digui(S, l, i) + digui(S, i +1 ,r)
            }
        }
        return 2 * digui(S,l+1, r-1)
        
    }
    digui(S, 0, S.length  -1)
};
scoreOfParentheses("()()") 