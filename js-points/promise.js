// case1
// let a = new Promise((res, rej) =>{
//   //  console.log(redafdsfsd);
//   //  res(9999999)
//    rej(9999999)
//    console.log('sdafsdf')
// }).then((res) => {
//   console.log(res)
// }).catch((err) => {
// console.log(err + "d")
// })


// case 2
// function asyncFunction() {
//   return new Promise(function (resolve, reject) {
//       console.log('3')
//       setTimeout(function () {
//           resolve("Async Hello world");
//       },0 );
//   });
// }
// asyncFunction().then(function (value) {
//   console.log(value);    // => 'Async Hello world'
// }).catch(function (error) {
//   console.log(error);
// });
 
// case 3 getURL
// function getURL(URL) {
//     return new Promise(function (resolve, reject) {
//          req = new XMLHttpRequest();
//         req.open("GET",URL);
//         req.onload = function () {
//              if(req.status) {
//                 resolve(req.responseText);
//             } else {
//                 reject( Error(req.statusText));
//             }
//         };
//         req.onerror = function () {
//             reject( Error(req.statusText));
//         };
//         req.send();
//     });
// }
// // 运行示例
// URL = 'http://httpbin.org/get';
// getURL(URL).then(function onFulfilled(value){
//     console.log(value);
// }).catch(function onRejected(error){
//     console.error(error);
// });

// case 4
// Promise.resolve(3).then((data) => {
//   console.log(data)
// })
// case5 
// Promise.reject(Error(344)).catch((data) => {
//   console.log(data)
// })
// case 6 
// console.log("out promise");
// let promise = new Promise ((resolve) => {
//   console.log('inner promise');
//   resolve(4);
// })
// promise.then((data) => {
//   console.log(data);
// })




// case 7 
// function taskA() {
//   return new Promise((res,rej) => {
//   // setTimeout(() => {
//     throw Error(3) 
//     console.log("Task A");
//     // rej(3)
    

//   // },1000)

//   })
// }
// function taskB() {
//   console.log("Task B");
// }
// function onRejected(error) {
//   console.log("Catch Error: A or B, error");
// }
// function finalTask() {
//   console.log("Final Task");
// }

// promise = Promise.resolve();
// promise
//   .then(taskA)
//   .then(taskB)
//   .catch(onRejected)
//   .then(finalTask);

// // case 8
// function taskA(data) {
//   // return new Promise((res,rej) => {
//   // setTimeout(() => {
//     // throw Error(data) 
//     console.log(data);
//     return data += 1;
//     // rej(3)
    

//   // },1000)

//   // })
// }
// function taskB(data) {
//     console.log(data);
//     return data ++;
// }
// function onRejected(error) {
//   console.log("Catch Error: A or B, error");
// }
// function finalTask(data) {
//     console.log(data);
//   console.log("Final Task");
// }

// promise = Promise.resolve(1);
// promise
//   .then(taskA)
//   .then(taskB)
//   .catch(onRejected)
//   .then(finalTask);

// // case 9
// aPromise = new Promise(function (resolve) {
//   resolve(3);
// });
// let a = aPromise.then(function (value) {
//   return value * 2;
// });
// let b = aPromise.then(function (value) {
//   return value * 2;
// });
// let c = aPromise.then(function (value) {
//   console.log(3 + value); // => 100
// })
// console.log(a==b)

// case 10
// function timerPromisefy(delay) {
//     return new Promise(function (resolve) {
//         setTimeout(function () {
//             resolve(delay);
//         }, delay);
//     });
// }
//  startDate = Date.now();
// // 所有promise变为resolve后程序退出
// Promise.race([
//     timerPromisefy(1),
//     timerPromisefy(32),
//     timerPromisefy(64),
//     timerPromisefy(128)
// ]).then(function (values) {
//     console.log(Date.now() - startDate );
//     // 約128ms
//     console.log(values);    // [1,32,64,128]
// });

// case 11 
// winnerPromise = new Promise(function (resolve) {
//   setTimeout(function () {
//       console.log("this is winner");
//       resolve("this is winner");
//   },1);
// });
// loserPromise = new Promise(function (resolve) {
//   setTimeout(function () {
//       console.log("this is loser");
//       resolve("this is loser");
//   }, 2);
// });
// // 第一个promise变为resolve后程序停止
// Promise.race([winnerPromise, loserPromise]).then(function (value) {
// console.log(value);    // => 'this is winner'
// });
// case 12
 promise =new  Promise(function(resolve, reject){
    throw  Error("message");
});
promise.catch(function(error){
    console.error(error);// => "message"
});