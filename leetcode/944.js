/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
  let strLength = A[0].length;  
  let Arr = [... new Array(strLength)].map(()=>[]);
  for (let i = 0; i< strLength; i++)   {
      A.forEach((item) => {
          Arr[i].push(item[i]);
      })
  }
  console.log(Arr)
  let result = [];
  Arr.forEach((item, index) => {
      
      let flag = true;
      let valid = item.some((items, index1) => {
          if (index1 < item.length - 1) {
              console.log(item[index1], item[index1+1])
              if(item[index1]>item[index1+1]) {
                  return true
              }
          }
          
      })
      console.log(valid)
      if (valid) {
          flag = false;
      }
      if (flag) {
          result.push(index);
      }
      
  })
  return strLength - result.length
};
minDeletionSize(
["cba","daf","ghi"])