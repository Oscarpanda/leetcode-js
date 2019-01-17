var generateParenthesis = function(n) {
  let arr = [[""]] ;
  let single = (n) =>{
      let temp = [];
      for (let i = 0;i< n ;i++) {
          arr[i].forEach((before, index) => {
             arr[n-i-1].forEach((after, index2) => {
                 temp.push("(" + before + ")" + after);
             })
          });
      }
      arr.push(temp)
  }
  for(let i = 1;i<=n; i++ ) {
      single(i)
  }
  console.log(arr)
};
generateParenthesis(12) 