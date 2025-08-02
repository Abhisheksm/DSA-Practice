//658: Find K Closest Elements

const findClosestElements = (arr, k, x) =>{
   let l = 0
   let r = arr.length-1
   while(l<r){
    let m = l+Math.floor((r-l)/2)
    if(arr[m+k]-x< arr[m]-x){
        l = m+1
    }
    else{
        r = m
    }
   }

   return arr.slice(l,l+k)
}

console.log(findClosestElements([1,1,2,3,4,5], 4, -1))