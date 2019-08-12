const PENDING = "pending";
const FULFILLED = "success";
const REJECTED = "fail"
const isFunction = (a)  => {
    return typeof a === "function";
}
class PromiseA {

    constructor(fn){
        fn(this.res.bind(this), this.reg.bind(this));
            
    }
    res(data){
    }
    reg(data){
    }
    then(onFullFilled, onReject){
    }
}
// let promise1 = new PromiseA((res, rej) => {
//     setTimeout(() => {
//         res("res")
//     }, 3000)
//     console.log(1);
// })
// let promise2 = new PromiseA((res, rej) => {
//     setTimeout(() => {
//         res("res")
//     }, 4000)
//     console.log(1);
// })
// PromiseA.all([promise1, promise2]).then((arr) => {
//     console.log(arr)
// })

let promise = new PromiseA((res, rej) => {
    setTimeout(() => {
        res("res")
    }, 3000)
    console.log(1);
}).then((data) => {
    console.log("data", data);
    return "then1"
}).then((data3) => {
    console.log("data3", data3)
    // return new PromiseA((res,rej) => {
    //     setTimeout(() => {
    //         res("resx")
    //     }, 3000)
    // })
}).then((data) => {
    console.log("fin")
});