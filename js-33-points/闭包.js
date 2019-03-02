// function createCounter(initial) {
//   var counter = initial;
  
//   function increment(value) {
//     counter += value;
//   }
  
//   function get() {
//     return counter;
//   }
  
//   return {
//     increment: increment,
//     get: get
//   };
// }
// var myCounter = createCounter(100);
// var myCounter1 = createCounter(200);
// console.log(myCounter.get());   // 返回 100

// var scope = "global scope";
// function checkscope(){
//     var scope = "local scope";
//     function f(){
//       console.log(scope)
//         return scope;
//     }
//     return f;
// }

// checkscope()();
// var num = 1;
// var myObject = {
//     num: 2,
//     add: function() {
//         this.num = 3;
//         (function() {
//             console.log(this.num);
//             this.num = 4;
//         })();
//         console.log(this.num);
//     },
//     sub: function() {
//         console.log(this.num)
//     }
// }
// myObject.add();
// console.log(myObject.num);
// console.log(num);
// var sub = myObject.sub;
// sub();


// var name = 'window'

// var person1 = {
//   name: 'person1',
//   show1: function () {
//     console.log(this.name)
//   },
//   show2: () => console.log(this.name),
//   show3: function () {
//     return function () {
//       console.log(this.name)
//     }
//   },
//   show4: function () {
//     return () => console.log(this.name)
//   }
// }
// var person2 = { name: 'person2' }

// person1.show1()
// person1.show1.call(person2)

// person1.show2()
// person1.show2.call(person2)

// person1.show3()()
// person1.show3().call(person2)
// person1.show3.call(person2)()

// person1.show4()()
// person1.show4().call(person2)
// person1.show4.call(person2)()



var name = 'window'

function Person (name) {
  this.name = name;
  this.show1 = function () {
    console.log(this.name)
  }
  this.show2 = () => console.log(this.name)
  this.show3 = function () {
    return function () {
      console.log(this.name)
    }
  }
  this.show4 = function () {
    return () => console.log(this.name)
  }
}

var personA = new Person('personA')
var personB = new Person('personB')

personA.show1()
personA.show1.call(personB)

personA.show2()
personA.show2.call(personB)

personA.show3()()
personA.show3().call(personB)
personA.show3.call(personB)()

personA.show4()()
personA.show4().call(personB)
personA.show4.call(personB)()