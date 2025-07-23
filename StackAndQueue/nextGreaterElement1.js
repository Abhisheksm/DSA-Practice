//496. Next Greater Element I

//using Stack
var nextGreaterElement = function (nums1, nums2) {
    let map = {}
    let stack = []
    stack.push(nums2[nums2.length - 1])
    map[nums2[nums2.length - 1]] = -1
    for (let i = nums2.length - 2; i >= 0; i--) {
        let top = stack.length - 1
        if (stack[top] > nums2[i]) {
            map[nums2[i]] = stack[top]
        }
        else {
            while (stack.length) {
                if (stack[stack.length - 1] < nums2[i]) {
                    stack.pop()
                }
                else {
                    map[nums2[i]] = stack[stack.length - 1]
                    break
                }
            }
            if (stack.length === 0) {
                map[nums2[i]] = -1
            }
        }
        stack.push(nums2[i])
    }
    let result = []
    for (let i = 0; i < nums1.length; i++) {
        if (map[nums1[i]]) {
            result.push(map[nums1[i]])
        }
    }
    return result
};

//Without Stack

var nextGreaterElement2 = function(nums1, nums2) {
    let map = {}
    for(let i=0; i< nums2.length;i++)
    {
        for(let j = i+1; j< nums2.length; j++)
        {
            if(nums2[j] > nums2[i])
            {
                map[nums2[i]] = nums2[j]
                break
            }
        }
        if(!map[nums2[i]]){
            map[nums2[i]] = -1
        }
    }
    let result = []
    for(let i=0; i< nums1.length; i++)
    {
        if(map[nums1[i]])
        {
           result.push(map[nums1[i]])
        }
    }
   return result
};

console.log(nextGreaterElement([1,3,5,2,7], [6,5,4,3,2,1,7]))