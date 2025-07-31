// 69. Sqrt(x)


//Using Binary Search
const mySqrt = (x) =>{
    if(x< 2) return x
    let l = 2
    let r = Math.floor(x/2)

    while(l<=r){
        let mid = Math.floor((l+r)/2)
        if(mid*mid ===  x) return mid
        else if(mid*mid  < x){
            l = mid+1
        }
        else{
            r = mid -1
        }
    }
    return r
}

//Using Linear Search
const mySqrt2 = (x) =>{
    if(x< 2) return x
    for(let i=1; i<= Math.floor(x/2)+1; i++)
    {
        if(x === i*i) return i
        else if(x < i*i) return i-1 
    }
}

console.log(mySqrt2(20))