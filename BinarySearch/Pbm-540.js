// 540. Single Element in a Sorted Array

var singleNonDuplicate = function(a) {
    let l = 0
    let r = a.length-1
    let leftCount
    while(l<=r){
        let  m = l + Math.floor((r-l)/2)
        if(a[m] === a[m-1]){
            leftCount = m-1-l
            if(leftCount % 2 !== 0){
             r = m-2
            }else{
                l = m+1
            }
        }
        else if(a[m] === a[m+1]){
            leftCount = m - l
            if(leftCount %2 !==0){
                r = m-1
            }else{
                l = m+2
            }
        }
        else{
            return a[m]
        }
    }

};

console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]))