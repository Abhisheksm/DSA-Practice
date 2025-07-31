const findMin = (a) =>{

    let l = 0
    let r = a.length-1

    while(l<=r){
        let m = l + Math.floor((r-l)/2)
        if(a[l]<= a[r]) return a[l]
        if(a[m-1] > a[m]) return a[m]

        if(a[m] >= a[l])
        {
            l = m+1
        }else{
            r = m-1
        }
    }
}

console.log(findMin([7,8,0,1,2,3,4,5,6]))