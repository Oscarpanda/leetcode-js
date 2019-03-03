var countBits = function(num) {
    
  let logs = Math.ceil(Math.log(num)/Math.log(2));
  let arr = [0];
  let dongtai = (arr) => {
    let after = arr.map(item => item +1)
    return arr.concat(after);
  }
  for (let i = 0;i<=logs + 1;i++) {
    if (i > 0) {
      arr = dongtai(arr)
    }
  }
  let result = arr.slice(0,num+1)
  return result 
  
};
countBits(5)