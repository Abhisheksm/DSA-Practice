// By finding midpoint of the Array

let arr = [1,2,3,3,2,1,4]

function checkPallindromeArr(arr)
{
    let mid = Math.floor(arr.length/2) //2
    for(let i=0;i<=mid;i++)
    {
        if(arr[i] !== arr[arr.length-1-i]) return false
    }
    return true
}

console.log(checkPallindromeArr(arr))