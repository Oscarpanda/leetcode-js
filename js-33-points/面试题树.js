function convert(list, parentKey, currentKey, rootValue) {
  let digui = (rootValue) => {
		let obj = {};
		obj.id = rootValue;
		let children = []
		for (let i = 0;i<list.length;i++) {
			if (list[i][parentKey] === rootValue) {
				children.push(digui(list[i][currentKey]))
			}
		}
		obj.children = children;
		return obj
		
		
  }
  let result = digui(rootValue)
  console.log(result);
	return 	
}
const list = [
  {
    "id": 19,
    "parentId": 0,
  },
  {
    "id": 18,
    "parentId": 16,
  },
  {
    "id": 17,
    "parentId": 16,
  },
  {
    "id": 16,
    "parentId": 0,
  }];
  const result = convert(list, 'parentId', 'id', 0); // result结果如下