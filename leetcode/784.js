var letterCasePermutation = function(S) {
  let result = [];
  let check = (s) => {
    return /[A-Za-z]/.test(s)
  }
  let digui = (start, str) => {
    if (str.length === S.length) {
      result.push(str)
    }
    for (let i = start; i< S.length; i++) {
      if (check(S[i])) {
        let copy1 = str;
        let copy2 = str;
        let tempBig = S[i].toUpperCase();
        let tempSm = S[i].toLowerCase();
        digui(start+1, copy1+=tempBig);
        digui(start+1, copy2+=tempSm);
      } else {
        let copy = str
        
        digui(start+1, copy + S[i]);
      }

    }


  }
  digui(0,"")
  console.log(result)
    
};
letterCasePermutation("13")
