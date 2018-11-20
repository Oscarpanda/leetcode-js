function sum(x:number = 12, y:number = 4):number {
  return x
}
let z: (x:number, y:number) => number = function() {
  return 2
}
z(undefined, undefined);
// 用接口定义函数的形状
interface S {
(x:number, y:number) :number
}
let x:S;
x= function(x, y) {
 return 3 
}
function push(array, ...items) {
  items.forEach(function(item) {
      array.push(item);
  });
}

let a = [];
push(a, 1, 2, 3);
// function reverse(x: string): string;
// function reverse(x: number): number {}; 
function reverse(x: number | string): number | string { if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

// reverse(123)
function getLength(something: string | number): number {
  if ((<string>something).length) {
      return (<string>something).length;
  } else {
      return something.toString().length;
  }
}