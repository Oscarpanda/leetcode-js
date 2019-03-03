var restoreIpAddresses = function(s) {
  let sArr = s.split("");
  let len = s.length;
  result = [];
  let digui = (start,history) => {
      if((len - start) / (4 - history.length) >3) return;
      for(let i = 1;i<=3;i++) {
        let historyCopy = JSON.parse(JSON.stringify(history));
        if (start + i <= len)  {
          let str = s.substr(start,i);
          if (parseInt(str) < 256 && str.length === parseInt(str).toString().length) {
            historyCopy.push(str);
            if (historyCopy.length < 4) {
              digui(start + i , historyCopy)
            } else {
              if (historyCopy.join("").length === len) {
                result.push(historyCopy)
              }
            }
          }
        }
        
      }
  }
  digui(0, [])

  result = result.map((item) => item.join("."))
  console.log(result);

};
restoreIpAddresses("25525511135")