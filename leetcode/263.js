var isUgly = function(num) {
    
    let digui = (nums) => {
        if (nums === 1) {
            return true
        } else if(nums % 5 === 0) {
            return digui(nums / 5);
        } else if (nums % 2 === 0) {
            return digui(nums / 2)
        } else if (nums % 3 === 0) {
            return digui(nums / 3)
        } else {
            return false
        }
        
    }
    console.log(digui(num))
};
isUgly(7)