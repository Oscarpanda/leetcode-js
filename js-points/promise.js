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

// case 8
function taskA(data) {
  // return new Promise((res,rej) => {
  // setTimeout(() => {
    // throw Error(data) 
    console.log(data);
    return data += 1;
    // rej(3)
    

  // },1000)

  // })
}
function taskB(data) {
    console.log(data);
    return data ++;
}
function onRejected(error) {
  console.log("Catch Error: A or B, error");
}
function finalTask(data) {
    console.log(data);
  console.log("Final Task");
}

promise = Promise.resolve(1);
promise
  .then(taskA)
  .then(taskB)
  .catch(onRejected)
  .then(finalTask);