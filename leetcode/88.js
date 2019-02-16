var merge = function(nums1, m, nums2, n) {
    
    let i = 0;
    let j = 0;
    while(j<n) {
        while(nums2[j]>nums1[i] && i<m+j) {
            i++
        }
        nums1.splice(nums1.length -1,1);
        nums1.splice(i, 0, nums2[j])
        j++
    }
    console.log(nums1)
    
};
merge([1,2,3,0,0,0],3,[2,5,6],3)
