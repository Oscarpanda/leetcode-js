/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
  let find = (st1, st2) => {
      let result = ""
      let l1 = st1.length;
      let l2 = st2.length;
      let min = Math.min(l1, l2)
     for (let i = 0;i<min;i++)  {
         if (st1[i] === st2[i]) {
             result+=st1[i]
         } else {
             return result
         }
         
     }
     return result
  } 
  let digui = (arr) => {
      if (arr.length === 1) return arr[0]
      let temp = [];
      for (let i = 0;i<arr.length;i +=2) {
          let tempResult 
          if(i+1 ===arr.length) {
             tempResult =arr[i] 
          } else {
             tempResult = find(arr[i],arr[i+1])
              
          }
          temp.push(tempResult)
          
      }
      return digui(temp)
  }
  let result = digui(strs);
  console.log(result);
};
longestCommonPrefix(["flower","flow","flight"])