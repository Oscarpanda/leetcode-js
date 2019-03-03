/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    count = (z) => {
        let hash = new Map() 
        for (let i = 0;i<z.length;i++) {
            if (hash.has(z[i])) {
                hash.set(z[i] , hash.get(z[i]) + 1)
            } else {
                hash.set(z[i],1)
            }
        }
        return hash; 
    }
    check = (a,b) => {
        let hashA = a;
        let hashB = b;
        //console.log(hashA,hashB)
        let flag = true;
         
        for (let index of hashB) {

            if (hashA.get(index[0]) !== hashB.get(index[0])) {
                return false
            }
            
        }
        console.log(hashA,hashB)
        return flag
    }
    let len1 = s.length;
    let len2 = p.length;
    console.log(len1, len2)
    if (len2 > len1) return []
    let result = [];
    let sArr = s.split("")
    let pArr = p.split("")
    let r = 0;
    let l = 0;
    let chuangkou = [sArr[0]]
    let hash = new Map();
    hash.set(sArr[0] , 1)
    let hashp = count(p);
    
    
    while(l<len1) {
        if (chuangkou.length<len2) {
            r++
            if (r>len1-1) break;
            chuangkou.push(sArr[r])
            if (hash.has(sArr[r]) ) {
                hash.set(sArr[r] , hash.get(sArr[r]) + 1)
            } else {
                hash.set(sArr[r],1)
            }
        } else {
            if(check(hash,hashp)) {
                result.push(l)
            }
            let shift = chuangkou.shift();
            hash.set(shift, hash.get(shift) - 1)

            
            l++
        }
        
    }
    return result;
};
findAnagrams("cbaebabacd"
,"abc")