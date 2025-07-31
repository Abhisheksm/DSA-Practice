// 162. Find Peak Element

const findPeakElement = (nums)=>{
    let l =0
    let r = nums.length-1

    while(l<r){
        let m = l + Math.floor((r-l)/2)
        if(nums[m] < nums[m+1]){
            l = m+1
        }else{
            r = m
        }
    }
    return r
}

console.log(findPeakElement([1,2,3,1]))