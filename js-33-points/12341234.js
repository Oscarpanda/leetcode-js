function a () {
    for (let i = 0; i < 5; i++) {
        (function (i) {
            this.i = i
            setTimeout(() => {
                console.log(i)
            }, 0)
            console.log(this.i)
        })(i)
    }
}

a()