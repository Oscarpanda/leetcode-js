/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  let set = new Set(S.split(""));
  let result = [];
  set.forEach((item, index) => {
    let obj = {};
    obj.start = S.indexOf(item);
    obj.end = S.lastIndexOf(item);
    // let obj2 = {};
    // obj2[index] = obj
    result.push(obj);
  })
    

  for (let i = result.length - 1;i>=0;i--) {
    let start = result[i].start;
    let end = result[i].end;

    for (let j = result.length - 1;j>=0;j--) {
      if (result[j].start > start && result[j].end < end) {
        result.splice(j, 1);
      } else if (result[j].start > start && result[j].start < end && result[j].end > end) {
        result[i].end = result[j].end
        end = result[j].end
        result.splice(j, 1);
      }

    }
  }
  // result.forEach((item, index) => {
  //   start = o
  result = result.map(item => item.end - item.start + 1)
  return result;
  console.log(result);


  // })

};
partitionLabels("ababcbacadefegdehijhklij");