var getByStart = function(times, start) {
  return times.filter((item) => {
    return item[0] === start
  })

}
var getByEnd = function(times, end) {
  return times.filter((item) => {
    return item[1] === end
  })

}
var getByStartEnd = function(times, start,end) {
  return times.filter((item) => {
    return item[0] === start && item[1] === end
  })
}
var  findMin = function(times) {
  let flagfalse = times.filter((b) => {
    return b.flag === false;
  })
  
  let result= flagfalse.sort((a, b) => {
    return a.val - b.val;
  })
  if (result.length > 0) {
    return result[0];
  } else {
    return false
  }
}
var networkDelayTime = function(times, N, K) {
  let kpoint = getByStart(times,K);
  let Map = [...new Array(N)].map((item,index) => 
    {return {
        val: 9999999,
        flag: false,
        index:index
      }
    })
  Map[K - 1].flag = true;
  Map[K - 1].val= 0;
  kpoint.forEach((item) => {
    Map[item[1] - 1].val = item[2];
  })
  let minKpoint  = findMin(Map);
  console.log(minKpoint);
  while(minKpoint) {
    let nextK = minKpoint.index + 1
    Map[minKpoint.index].flag = true
    let nextKpoint = getByStart(times, nextK);
    nextKpoint.forEach((item) => {
      Map[item[1] - 1].val = Math.min(item[2] + Map[nextK - 1].val, Map[item[1] - 1].val);
    })
    minKpoint = findMin(Map)
  }
  console.log(Map);
  let final = Map.sort((a,b) => {
    return b - a
  })
  return final[0].val


};

networkDelayTime([[2,1,1],[2,3,1],[3,4,1]]
 , 4
,  2)