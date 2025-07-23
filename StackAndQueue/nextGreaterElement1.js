//496. Next Greater Element I

//using Stack
/*
1. Start from last element of the nums2 array. and push last element into the stack.
2. Assign -1 to last element as it will never have any grater value
3. Start loop from second last elemment.
4. If element is less then stacks top value then assign, stacks top value to the element and push element in stack.
5. If element is less then stacks top value, pop that element untill it finds value greater then that element.
6. If it does not find any value greater then it, then assign it -1.
7. Push that element into the stack.
*/
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