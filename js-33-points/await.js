
function  times() {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("2");
      res(1)
    }, 10000);
  })
}
async function  f() {
  let a = await await times()
  console.log(a)
}
 f()