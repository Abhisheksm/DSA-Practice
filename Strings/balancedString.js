//LeetCode : 1221 Balanced String

var balancedStringSplit = function(s) {
    let countR = 0
    let count = 0
    for(let i=0; i< s.length ;i++)
    {
        if(s[i] === 'R')
        {
            countR+=1
        }
        else
        {
            countR-=1
        }

        if(countR === 0)
        {
            count++
        }
    }
    return count
};

caonsole.log(balancedStringSplit("RLRRLLRLRL"))