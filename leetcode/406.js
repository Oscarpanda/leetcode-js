var reconstructQueue = function(people) {
    
  let sortPeople = people.sort((a,b) => {
      return a[0] - b[0]
  })
  console.log(sortPeople)
  let result = []
  let sort = [];
  sortPeople.forEach((item) =>{
    if (sort.length === 0) {
      sort.push(item);
    } else {
      let len = sort.length - 1;
      if (sort[len][0] !== item[0]) {
        sort.push(item);
      }else {
        while(len >= 0 && sort[len][0] === item[0]  && sort[len][1] < item[1] ) {
            len-- 
        }
        sort.splice(len+1,0,item)

      }
    }
  })
  console.log(sort)
  while(sort.length) {
      let temp = sort.pop();
      result.splice(temp[1],0,temp)
  }
  console.log(result)
  return result
};
reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]])