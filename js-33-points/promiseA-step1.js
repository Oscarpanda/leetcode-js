const PENDING = "pending";
const FULFILLED = "success";
const REJECTED = "fail"
const isFunction = (a)  => {
    return typeof a === "function";
}
class PromiseA {

    constructor(fn){
        this.status = PENDING;
        this.data = ""
        this.resCallback = ""
        this.rejCallback = ""
        fn(this.res.bind(this), this.reg.bind(this));
            
    }
    res(data){
        let run = (data) => {
            this.data = data
            this.status = FULFILLED;
            if (this.resCallback) {
                this.resCallback(data)
            }
        }
        setTimeout(() => {
            run(data);
        }, 0)
    }
    reg(data){
        let run = (data) => {
            this.data = data
            this.rejCallback(data)
        }
        setTimeout(() => {
            run(data);
        }, 0)
    }
    then(onFullFilled, onReject){
        return new PromiseA((resNext, rejNext) => {
            let success = (data) => {
                let ress = onFullFilled(data)
                resNext(ress)
            }
            switch(this.status){
                case PENDING:
                this.resCallback = success
                break;
                case PENDING:
                success(this.data)
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
let b = 0;
let loadQueue = [1000, 2000, 3000, 5000];
promise1Fn = function(time) {
    return  new PromiseA((res, rej) => {
        setTimeout(() => {
            res(time)
        }, time)
        console.log(1);
    }).then((data) => {
        console.log(data)
    })

}
let promise1 = new PromiseA((res, rej) => {
    setTimeout(() => {
        res("res")
    }, 3000)
    console.log(1);
}).then((data) => {
    console.log(data)
})
// loadQueue.push(promise1)
let promise2 = new PromiseA((res, rej) => {
    setTimeout(() => {
        res("res")
    }, 4000)
    console.log(2);
}).then((datrar) => {
    console.log("4")
})
// loadQueue.push(promise2)
// PromiseA.all([promise1, promise2]).then((arr) => {
//     console.log(arr)
// })
loadQueue.reduce(( chain, load) => {
          return chain.then(() => promise1Fn(load));
}, Promise.resolve())

// let promise = new PromiseA((res, rej) => {
//     setTimeout(() => {
//         b++
//         res("res")
//     }, 3000)
//     console.log(1);
// }).then((data) => {
//     b++
//     console.log("data",b);
//     return "then1"
// }).then((data3) => {
//     b++
//     console.log("data3", b)
//     // return new PromiseA((res,rej) => {
//     //     setTimeout(() => {
//     //         res("resx")
//     //     }, 3000)
//     // })
// }).then((data) => {
//     console.log("fin")
// });