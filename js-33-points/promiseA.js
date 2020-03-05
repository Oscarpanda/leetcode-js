
const PENDING = "pending";
const FULFILLED = "success";
const REJECTED = "fail"
const isFunction = (a)  => {
    return typeof a === "function";
}
class PromiseA {

    constructor(fn){
        if (!isFunction(fn)) {
            throw new Error("promise must accept a function as a parameter");
        }
        this.FULFILLEDQuene= [];
        this.REJECTEDQuene = [];
        this.result = null;
        this.status = PENDING;
        try {
            fn(this.res.bind(this), this.reg.bind(this));
        } catch (error) {
            this.reg(error)
        };

    }
    res(data){
        let run = () => {
            const runFulFilledQuene = (val) => {
                let cb
                while(cb = this.FULFILLEDQuene.shift()){
                    cb(val);
                }
            }
            const runRejectQuene = (val) => {
                let cb
                while(cb = this.REJECTEDQuene.shift()) {
                    cb(val);
                }
            }
            this.status = FULFILLED;
            this.data = data
            runFulFilledQuene(data);

        }
        setTimeout(() => {
            run()
        }, 0)
    }
    reg(data){
        let run = () => {
            const runRejectQuene = (val) => {
                let cb
                while(cb = this.REJECTEDQuene.shift()) {
                    cb(val);
                }
            }
            this.status = REJECTED;
            runRejectQuene(data);

        }
        setTimeout(() => {
            run()
        }, 0)
    }
    then(onFullFilled, onReject){
        return new PromiseA((onFullFilledNext, onRejectNext) => {
            let success = (data) => {
                try {
                    if (isFunction(onFullFilled)) {
                        let ress = onFullFilled(data)
                        if (ress instanceof PromiseA) {
                            ress.then(onFullFilledNext, onRejectNext)
                        } else {
                            onFullFilledNext(ress);
                        }

                    }

                } catch(error) {
                    onFullFilledNext(error)
                }
            }
            let fail = (data) => {
                try {
                    if (isFunction(onReject)) {
                        let ress = onReject(data)
                        if (ress instanceof PromiseA) {
                            ress.then(onFullFilledNext, onRejectNext)
                        } else {
                            onRejectNext(ress);
                        }

                    }

                } catch(error) {
                    onFullFilledNext(error)
                }
            }
            switch(this.status) {
                case PENDING:
                this.REJECTEDQuene.push(fail)
                this.FULFILLEDQuene.push(success)
                break
                case FULFILLED:
                success(this.data)
                break
            }


        })
    }
    static resolve(val) {
        if (val instanceof PromiseA) return val
        new PromiseA((res) => res(val))
    }
    static all(list) {
        return new PromiseA((resolve, reject) => {
            let count = 0
            let val = [];
            for (let i = 0; i < list.length; i++) {
                list[i].then((res) => {
                    val[i] = res
                    count++
                    if (count === list.length) {
                        resolve(val)
                    }
                })
            }
        })
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

let promise1 = new Promise((res, rej) => {
        setTimeout(() => {
          res("res2")
        },5000);
    console.log(1);
})
let a = async() => {
 let b = await promise1
 console.log(b)
}
a()
// setTimeout(async() => {
//   let a = await promise1
//   console.log(a)
// }, 2000);
// let promise = new PromiseA((res, rej) => {
//         res("res")
//         res("res")
//     console.log(1);
// }).then((data) => {
//     console.log("data", data);
//     return "then1"
// }).then((data3) => {
//     console.log("data3", data3,ddd)
//     return new PromiseA((res,rej) => {
//         setTimeout(() => {
//             res("resx")
//         }, 3000)
//     })
// }).then((data) => {
//     console.log("fin")
// });