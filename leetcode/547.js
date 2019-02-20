var findCircleNum = function(M) {
  const unionSet = Array(M.length).fill().map((_, index) => new Set([index]));

  for (const i of M.keys()) {
      for (const j of M[i].keys()) {
          if(j <= i) continue;
          if(M[i][j] === 1) {
              // 合并并查集
              const setI = unionSet[i];
              const setJ = unionSet[j];

              for (const num of setJ) {
                  setI.add(num);
              }
              for (const parent of setJ) {
                  unionSet[parent] = setI;
              }
          }
      }
  }

  return new Set(unionSet).size;
};
// findCircleNum([[1,1,0],
//  [1,1,0],
//  [0,0,1]]);
findCircleNum([[1,1,0],
 [1,1,1],
 [0,1,1]])