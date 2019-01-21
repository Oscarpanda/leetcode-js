var countSubstrings = function(s) {
  let sum = 0 
  let ishuiwen = (s) => {
      let temp = s.split('').reverse().join('');
      return temp === s
  }
  let digui = (start, arr) => {
      console.log(arr)
      if (ishuiwen(arr) && arr !== "") {
          sum += 1
      }
      for (let i = start;i < s.length;i++) {
          digui(i+1, arr+s[i])
      }
      
  }
  // digui(0,"")
  for(let i = 0;i<s.length;i++) {
    for (let j = i+1;j<=s.length;j++) {
      temp = ishuiwen(s.slice(i,j))
      if(temp) {
        console.log(s.slice(i,j))
        sum+=1
      }
    }
  }
  return sum
};
countSubstrings("abc");