//Leetcode 344. Reverse String

const reverseString = (arr)=>{
  let mid = Math.floor(arr.length/2)
  for(let i=0;i<mid;i++)
  {
    let temp = arr[i]
    arr[i] = arr[arr.length-1-i]
    arr[arr.length-1-i] = temp
  }
  return arr
}

console.log(reverseString(["H","a","n","n","a","h"]))