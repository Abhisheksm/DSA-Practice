// 374. Guess Number Higher or Lower

var guessNumber = function(n) {
    let l = 1
    let r = n
    while(l<=r)
    {
        let mid = l + Math.floor((r-l)/2)
        let res = guess(mid)
        if(res === 0) {return mid}
        else if(res < 0)
        {
            r = mid-1
        }
        else{
            l = mid + 1
        }
    }
};