//852: 852. Peak Index in a Mountain Array

const peakIndexInMountainArray = (a) =>{
    let l = 0
    let r = a.length-1

    while(l<r){
        let m = l+Math.floor((r-l)/2)

        if(a[m] > a[m+1] && a[m] > a[m-1]) return m

        if(a[m+1] > a[m]){
            l = m+1
        }else{
            r = m
        }
    }
}

console.log(peakIndexInMountainArray([18,29,38,59,98,100,99,98,90]))