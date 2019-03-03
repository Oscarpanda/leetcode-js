var combinationSum2 = function(arrs, n) { 
    let left = arrs
    result = []
    let checkarrs = ( arrss, arr) =>{
      for (let  i = 0; i<arrss.length; i++) {
        if (arrss[i].sort((a,b) => a-b).join("") === arr.sort((a,b) => a -b).join("")) {
          return false
        }

      }
      return true

    }
    let digui = (start, value, arr,left) => {
      if ( value === 0) {
        return 
      }
    for (let i = 0; i <left.length;i++) {
      let copy = arr.slice(0);
      let copyLeft = left.slice(0)
      let temp = copyLeft.splice(i,1)
      copy.push(temp[0])
      if (value - temp[0] === 0){
        if (checkarrs(result, copy)) {
          result.push(copy)

        }
      } else if ( value - temp[0] >0){
          console.log(copyLeft)
          digui(0, value- temp[0], copy, copyLeft)
      } 
    }
  }
  digui(0, n, [], left)
  console.log(result)
};
combinationSum2([1,1], 2)