const add = (...argss) => {
 return  args.reduce((a,b) => a+b)
}
function curring(func) {

  let arr = [];
  return function result (...rest) {
    if (rest.length === 0) {
      let re = func(...arr)
      console.log(re)
      return re;
    } else {
      arr.push(...rest)
    }

  }

}
// const sum = curring(add)
// sum(1)
// sum(1,2)
// sum()
Function.prototype.bind2 = function (context) {

  var self = this;
  // 实现第3点，因为第1个参数是指定的this,所以只截取第1个之后的参数
  // arr.slice(begin); 即 [begin, end]
  var args = Array.prototype.slice.call(arguments, 1);

  return function () {
    // 实现第4点，这时的arguments是指bind返回的函数传入的参数
    // 即 return function 的参数
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(context, args.concat(bindArgs));
  }
}
var value = 2;

var foo = {
  value: 1
};

function bar(name, age) {
  return {
    value: this.value,
    name: name,
    age: age
  }
};

// var bindFoo = bar.bind2(foo, "Jack");
// bindFoo(20);
const currying = fn =>
  judge = (...args) =>
  args.length >= fn.length ?
  fn(...args) :
  (...arg) => {
    return judge(...args, ...arg)
  }

// Test
const fn = currying(function (a, b, c) {
  console.log([a, b, c]);
});

// fn("a", "b", "c") // ["a", "b", "c"]
// fn("a", "b")("c") // ["a", "b", "c"]
fn("a", "b") // ["a", "b", "c"]
fn("a")("b")("c") // ["a", "b", "c"]
fn("a")("b", "c") // ["a", "b", "c"]