var solveNQueens = function(n) {
    let nArr = [...new Array(n)].map((item) => {
        let temp = [] 
        for (let i = 0;i<n;i++) {
            temp.push(".");
        }
        return temp
    })
    let check = (result,nArr) => {
        let nArrs = nArr.map((item)=>item.join("")).join("");
        for (let i = 0;i<result.length;i++) {
            if (result[i].map((item) => {
                return item.join("")
            }).join("") === nArrs) {
                return false
            }
        }
        return true

    }
    let findchildren = (nArr, n) =>{
        if (n >= nArr.length  ) return []
        let result = []
        for (let i = 0;i<nArr[n].length;i++) {
            if (nArr[n][i] === ".") {
                let obj = {}
                obj.x = i;
                obj.y = n;
                result.push(obj)
            }

        }
        return result
    }
    let goAround = (nArr, obj) =>{
        let copy = JSON.parse(JSON.stringify(nArr));
        let x = obj.x;
        let y = obj.y;
        let n = nArr.length;
        for (let i = 0;i<n;i++) {
            if (copy[y][i] === ".") copy[y][i] = "x";
            if (copy[i][x] === ".") copy[i][x] = "x";

        }
        while(x<n && x>=0 && y<n && y>=0) {
        if (copy[y][x] === ".") copy[y][x] = "x";
            y++;
            x++;
        }
        x = obj.x;
        y = obj.y
        while(x<n && x>=0 && y<n && y>=0) {
        if (copy[y][x] === ".") copy[y][x] = "x";
            y--;
            x++;
        }
        x = obj.x;
        y = obj.y
        while(x<n && x>=0 && y<n && y>=0) {
            if (copy[y][x] === ".") copy[y][x] = "x";
            y--;
            x--;
        }
        x = obj.x;
        y = obj.y
        while(x<n && x>=0 && y<n && y>=0) {
            if (copy[y][x] === ".") copy[y][x] = "x";
            y++;
            x--;
        }
        return copy
        
    }
    let result = [];
    let digui = (nArr, children, sum) => {
        if (sum === n) {
            // if (check(result,nArr)) {
                result.push(nArr);

            // }

        }
        for (let i = 0;i<children.length;i++) {
            let sumcopy = sum
            let copy = JSON.parse(JSON.stringify(nArr));
            copy[children[i].y][children[i].x] = "Q";
            
            let goAfter = goAround(copy, children[i])
            digui(goAfter, findchildren(goAfter,sum+1), sumcopy+1);
        }

    }
    for (let i = 0;i<nArr.length;i++) {
        let copy = JSON.parse(JSON.stringify(nArr));
        copy[0][i] = "Q"
        let obj = {}
        obj.x = i
        obj.y = 0 

        let afterGo = goAround(copy, obj)
        let children = findchildren(afterGo, 1);
        digui(afterGo, children, 1)
    }
    reusult = result.map((item)=> {
        return item.map((i) => i.join("").replace(/x/g,".")) 
    });

     console.log(reusult )
}
solveNQueens(9) 