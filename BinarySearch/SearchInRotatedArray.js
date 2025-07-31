//33. Search in Rotated Sorted Array

const search = (arr, target) =>{
 let l = 0
 let r = arr.length-1
 while(l<=r)
 {
    let mid = l+Math.floor((r-l)/2)
    if(arr[mid] === target) return mid
    if(arr[l] <= arr[mid]){
      if(target >= arr[l] && target < arr[mid])
      {
        r = mid -1
      }
      else{
        l = mid+1
      }
    }
    else{
        if(target <= arr[r] && target > arr[mid])
        {
         l = mid+1
        }
        else{
            r = mid-1
        }
    }
 }
 return -1
}
// [4,5,6,7,0,1,2]
console.log(search([7,8,0,1,2,3,5], 3))