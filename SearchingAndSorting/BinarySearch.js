const BinarySearch = (nums, val) =>{
   let left = 0
   let right = nums.length-1

   while(right>=left)
   {
    let mid = Math.floor((right+left)/2)
    if(nums[mid] === val) return mid
    else if(nums[mid] > val){
        right = mid-1
    }
    else{
        left = mid+1
    }
   }
   return -1
}

console.log(BinarySearch([1,3,4,5,7,8,9,15], 3))