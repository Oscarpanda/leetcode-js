var combine = function(n, k) {
  let a = [...new Array(n)].map((item, index) => index+1 )
    
  let digui = (start, arr) => {
    if (arr.length === k) {
      console.log(arr)
    }
    for(let i = start;i< n;i++) {
      let copy = arr.slice(0);
      let temp = copy.concat(a[i])
      digui(i+1,temp)
    }
  }
  digui(0,[])
};
combine(4,2)