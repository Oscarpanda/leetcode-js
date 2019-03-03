/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    
    let mianji = (a,b,c) => {
        let x1 = a[0];
        let x2 = b[0];
        let x3 = c[0];
        let y1 = a[1];
        let y2 = b[1];
        let y3 = c[1];
        return Math.abs(x1*y2+x2*y3+x3*y1-x1*y3-x2*y1-x3*y2) /2
    }
    let max = 0;
    for (let i= 0;i<points.length;i++) {
        for(let j = i + 1;j<points.length;j++) {
            for(let l = j+1;l<points.length;l++) {
                let z =mianji(points[i], points[j],points[l]) 
                if (z > max) {
                    max = z 
                }
            }
        }
        
    }
    return max
};
largestTriangleArea([[0,0],[0,1],[1,0],[0,2],[2,0]]);