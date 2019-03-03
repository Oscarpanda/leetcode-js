result = [];
let a = (arr) => {
    console.log(arr.toString())
    arr.forEach(element => {
       if (Array.isArray(element))  {
           a(element)
       } else {
           result.push(element)
       }
       
    });


}
a([ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10])
console.log(result);