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
function findMaxCrossingSubarray(arr,low, mid, high) {
    let leftSum = -1000;
    let sum = 0;
    let maxLeft;
    for (let i = mid; i>=low; i--) {
        sum = sum + arr[i];
        if (sum > leftSum) {
            leftSum = sum;
            maxLeft = i;
        }
    }
    let rightSum = -1000;
    sum = 0;
    let maxRight;
    for (let j = mid + 1; j<high; j++) {
        sum = sum + arr[j];
        if (sum > rightSum) {
            rightSum = sum;
            maxRight= j;
        }
    }
    return {"leftIndex": maxLeft, "rightIndex" :maxRight, "sum": leftSum + rightSum}

}

function findMaximumSubarray(arr, low, high) { 
    if (low === high) {
      return {"leftIndex":low, "rightIndex" :high, "sum": arr[low]}
    }
    let mid = Math.floor((low + high)/2);

    const result1 = findMaximumSubarray(arr, low, mid);
    const result2 = findMaximumSubarray(arr, mid + 1, high);
    const result3 = findMaxCrossingSubarray(arr, low, mid, high);
    const leftLow = result1.leftIndex;
    const leftHigh = result1.rightIndex;
    const leftSum = result1.sum;
    const rightLow = result2.leftIndex;
    const rightHigh = result2.rightIndex;
    const rightSum = result2.sum;
    const croseLow = result3.leftIndex;
    const croseHigh = result3.rightIndex;
    const croseSum = result3.sum;
    if (leftSum > rightSum && leftSum > croseSum) {
      return {"leftIndex": leftLow, "rightIndex" :leftHigh, "sum": leftSum}
    } else if (rightSum > leftSum &&  rightSum> croseSum) {
      return {"leftIndex": rightLow, "rightIndex" : rightHigh, "sum": rightSum}
    } else {
      return {"leftIndex": croseLow, "rightIndex" : croseHigh, "sum": croseSum}
    }
}

console.log(findMaximumSubarray(array, 0, 7))
// console.log(dep(array))
