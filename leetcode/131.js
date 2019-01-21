var partition = function(s) {
  let result = [];
  let huiwen = (z) => {
      for (let i = 0;i<z.length / 2;i++) {
          if(z[i] !== z[z.length - 1-i]) {
              return false
          }
      }
      return true
  }
  let digui = (start, arr) => {
    // if (start === s.length) {
    //     console.log(arr)
    //     result.push(arr)
    // }
    for (let i =start;i<s.length;i++) {
        let first = s.substring(start, i+1) ;
        if (huiwen(first)) {
            let copy = arr.slice(0)
            copy.push(first);
            if (copy.join("") == s) {
                result.push(copy)
            } else {
                digui(i+1, copy)
            }
        }
    }

  }
  digui(0,[])
  console.log(result)
};