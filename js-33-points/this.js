// case 1
// var name = "windowsName";
//  var a = {
//   name : "Cherry",
//   func1: function () {
//    console.log(this.name)  
//   },
//   func2: function () {
//    setTimeout(function () {
//     try{this.func1()}
//     catch (err){
//       console.log(err);
//     }
//    },100);
//   }
//  };
//  a.func2()
// case 2 
// 箭头函数的 this 始终指向函数定义时的 this，而非执行时。，箭头函数需要记着这句话：“箭头函数中没有 this 绑定，必须通过查找作用域链来决定其值，如果箭头函数被非箭头函数包含，则 this 绑定的是最近一层非箭头函数的 this，否则，this 为 undefined”。
// var name = "windowsName";
// var a = {
//  name : "Cherry",
//  func1: function () {
//   console.log(this.name)  
//  },
//  func2: function () {
//   setTimeout( () => {
//    this.func1()
//   },100);
//  }
// };
// a.func2()  // Cherry
// case 3  apply
var name = "windowsName";
 var a = {
  name : "Cherry",
  func1: function () {
   console.log(this.name)  
  },
  func2: function () {
   setTimeout(function () {
    this.func1()
   }.call(a),100);
  }
 };
 a.func2()