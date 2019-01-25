var combinationSum = function(candidates, target) {
    
  let result = [];
  let min = Math.min(...candidates);
  var check = (arrs, a)  => {
    let flag = true
    for (let i = 0;i<arrs.length;i++) {
        let flag2 = true 
        if (arrs[i].length === a.length) {
           let copy = a.slice(0) 
            for (let j = 0;j<arrs[i].length;j++) {
                if (copy.indexOf(arrs[i][j]) !== -1) {
                    copy.splice(copy.indexOf(arrs[i][j]),1)
                }
            }
            if (copy.length > 0)  {
                flag2 = false
            }
            
        } else {
            flag2 = false
        }
        if (flag2===true) {
            flag = false
            return false
        }
    }
    return true
}
  let digui = (value, arr) => {
    console.log(value)
    if (value === 0) {
      return true
    }
    if (value < min) {
      return false
    }
    for (let i = 0;i<=candidates.length;i++) {
      if (candidates[i] <= value) {
        copy = arr.slice(0); 
        if (value - candidates[i] === 0) {
          
          let zz = copy.concat([candidates[i]]);

          if (check(result,zz )) {
            result.push(zz);
          }

        } else {
          copy.push(candidates[i])
          digui(value - candidates[i], copy);

        }

      }
    }

  }
  digui(target, [])
  console.log(result);
};
combinationSum([2,3,5], 8)