var combinationSum3 = function(k, n) {
  let left = [...new Array(9)].map((item, index) => index+1)
  let result =[];
  let digui = (start,value, arr) => {
    if (arr.length === k) {
      return 
    }
    if (value === 0) {
      return 
    }
    for (let i = start; i < value;i++) {
      let copy = arr.slice(0);
      copy.push(left[i])
      if (copy.length === k && left[i] === value) {
        result.push(copy)
      } else if (copy.length < k && value - left[i] >0){
        if (copy.length > 0) {
          let start1 = copy[copy.length - 1]
          digui(start1, value - left[i], copy)
        }
      }
    }

  }
  digui(0, n, [])
  console.log(result)
    
};
combinationSum3(3, 9)