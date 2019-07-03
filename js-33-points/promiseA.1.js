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