const array = [1, -2, 3, 10, -4, 7, 2, -5];
function dep(array) { // o(n)
    let sum = 0;
    let maxsum = 0;
    for (let i = 0; i < array.length; i ++) {
        sum = array[i] + sum;
        if (sum > maxsum) {
            maxsum = sum
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    return maxsum;
}
function find-max-crossing-subarray(array,low, mid, hight) {
    let left-sum = -

}
console.log(dep(array))
