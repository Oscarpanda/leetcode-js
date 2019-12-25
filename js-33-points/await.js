
function  times() {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("2");
      res(1)
    }, 1000);
  })
}
 function f() {
   var ms = 2000;
   for (var i = 2; i < 5; i++) {
     setTimeout(function () {
       console.log(ms * i);
     }, ms * i); //for循环执行，settimeout跟着走赋值变量但不会执行函数，for循环在执行完后再赋值
   }
 }
 f()