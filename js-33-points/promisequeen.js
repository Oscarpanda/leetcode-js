function singlePromise(index) {
  return new Promise((reslove, reject) => {
    console.log("xxx");
    setTimeout(() => {
      if (index === 3) {
        reslove("success")
        console.log(index)
      } else {
        reslove("fail")
      }

    }, 1000)
  })
}
function multiPromise(arr) {
  // let promise = Promise.resolve();
  let promise = singlePromise(arr.shift());
  do {
    let index = arr.shift();
    ((value) => {
      if (promise) {
        promise = promise.then((result) => {

          console.log(result);
          if (result === "fail") {
            return singlePromise(value)
          }
          if (result === "success") {
            return null
          }
        })
      } else {
        arr = [];
      }
    })(index)

  } while (arr.length)
  return promise;

}
// singlePromise();
multiPromise([1,2,3,4,5]).then((result) => {
  console.log("finnal")
})