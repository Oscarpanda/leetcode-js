/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function(A) {
    let result = [];
    
    for (let ii = A.length - 1;ii >= 0; ii--) {
        let tempstr = A.splice(ii, 1);
        // A.pop();
        if (tempstr.length === 0) continue;
        let temp = [tempstr];
        for (let j = A.length - 1;j >= 0;j--) {
            if (checkright(tempstr[0],A[j])) {
                temp.push(A.splice(j,1))
            }
        }
        
        result.push(temp)
    }
    return result.length
};
var checkright = function(str1, str2) {
    let jishu = '';
    let oshu = '';
    if (str1.length !== str2.length) {
        return false
    }
    for (let i = 0;i <str1.length; i+= 2) {
        jishu += str1[i];
    }
    for (let i = 1;i <str1.length; i+= 2) {
        oshu+= str1[i];
    }
    for (let i=0;i <str2.length; i++) {
        if (i % 2 === 0) {
            if (jishu.indexOf(str2[i]) !== -1) {
                let index = jishu.indexOf(str2[i]);
                let a = jishu.split('')
                a.splice(index,1)
                jishu = a.join('')
            }

        } else {
            if (oshu.indexOf(str2[i]) == -1) {

                let index = oshu.indexOf(str2[i]);
                let a = oshu.split('')
                a.splice(index,1)
                oshu= a.join('')
            }
        }
    }
    if (jishu.length === 0 || oshu.length === 0) {
        return true
    }
    return false 
}
numSpecialEquivGroups(["aa","bb","ab","ba"]
)