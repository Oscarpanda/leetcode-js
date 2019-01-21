var permuteUnique = function(nums) {
  let result = [];
  let digui = (arr1,arr2) => {
    if (arr2.length === 0) {
      if (check(result, arr1)) {
        console.log(arr1)
        result.push(arr1)

      }
    }
    for(let i = 0;i<arr2.length;i++) {
      let copy = arr2.slice(0);
      let arr1then= arr1.concat([arr2[i]]);
      copy.splice(i,1);
      digui(arr1then,copy)
    }
  }
  digui([],nums)
  return  result
};
var check = (arrs, a)  => {
    let flag = true
    for (let i = 0;i<arrs.length;i++) {
        let flag2 = true 
        if (arrs[i].length === a.length) {
            for (let j = 0;j<arrs[i].length;j++) {
              if (a[j] !== arrs[i][j]) {
                flag2 = false
              }
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
permuteUnique([1,2,3])
console.log(check([[2,2,1], [2,3]],[2,1]))
let set = new Set().add([2]).add([2])
console.log(set)