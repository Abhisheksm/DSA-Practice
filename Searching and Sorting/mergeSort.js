function sortArray (nums)
{
    if(nums.length === 1) return nums
    let mid = Math.floor(nums.length/2)
    let left = sortArray(nums.slice(0,mid))
    let right = sortArray(nums.slice(mid))

    return merge(left, right)
};

console.log(sortArray([5,2,4,1]))

function merge(left, right){
    let output =[]
    let p1=0
    let p2=0
    for(let i=0; i< left.length+right.length; i++)
    {
      if((p1<left.length && left[p1] < right[p2]) || p2>=right.length)
      {
        output[i] = left[p1]
        p1++
      }
      else
      {
        output[i] = right[p2]
        p2++
      }
    }

    return output
}