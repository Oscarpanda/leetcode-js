const loop = (times, req, cb) => {
    let tempTimes = times
    let fun = (req) => {
        tempTimes --
        fetch(req).then(cb).catch(e => {
            if(tempTimes > 0) {
                fun(req)
            }
        })
    }
    return fun
}