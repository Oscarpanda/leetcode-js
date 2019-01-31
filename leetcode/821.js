var shortestToChar = function(S, C) {
  let last = 0;
  let lastindex = 9999999999;
  let before = 0;
  let result = [];
  let que = [lastindex]

  for (last = 0;last < S.length;last++) {
    if (S[last] ===C) {
      if (que.length === 1) {
        que.push(last)
      } else {
        que.push(last);
        que.shift();
      }
      while (before <= last) {

        result.push(Math.min(Math.abs(before - que[0]), Math.abs(before - que[1])));
        before ++ 
      }

    }

  }
  if (que[1]<S.length) {
    for(let j = 1; j<S.length - que[1];j++) {
      result.push(j)
    }
  }
  console.log(result)
    
};
shortestToChar("aaba", "b")