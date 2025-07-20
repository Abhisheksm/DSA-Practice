//88. Merge Sorted Array

var merge = function(nums1, m, nums2, n) {
 let p1 = m-1
 let p2 = n-1
 for(let i=0; i< nums1.length ;i++)
 {
    if(p2 < 0) break
    if(p1>=0 && nums2[p2] > nums1[p1])
    {
      nums1[nums1.length-1-i] = nums2[p2]
      p2--
    }
    else{
      nums1[nums1.length-1-i] = nums1[p1]
      p1--
    }
 }
 return nums1
};

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))