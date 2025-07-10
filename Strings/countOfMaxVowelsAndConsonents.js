//Find Most Frequent Vowel and Consonant

var maxFreqSum = function(s) {
    let vowels = ['a','e','i','o','u']
    vow = new Map()
    cons = new Map()
    for(let i=0; i<s.length;i++)
    {
        if(vowels.includes(s[i]))
        {
            if(vow.has(s[i]))
            {
                vow.set(s[i], vow.get(s[i])+1)
            }
            else{
                vow.set(s[i],1)
            }
        }
        else{
              if(cons.has(s[i]))
            {
                cons.set(s[i], cons.get(s[i])+1)
            }
            else{
                cons.set(s[i],1)
            }
        }
    }
    let maxVow = 0
    vow.forEach((value)=>{
        if(value>maxVow)
        {
            maxVow = value
        }
    })
    let maxCons = 0
    cons.forEach((value)=>{
        if(value>maxCons)
        {
            maxCons = value
        }
    })
    console.log(maxVow, maxCons)
    return maxVow+maxCons
};

//Approach2
function maxFreqSum2(s)
{
    var maxFreqSum = function(s) {
        let vowels = ['a','e','i','o','u']
        let maxVow = 0
        let maxCons = 0
        let map ={}
        for(let i=0; i< s.length; i++)
        {
            if(map[s[i]])
            {
                map[s[i]]+=1
            }
            else
            {
                map[s[i]] = 1
            }
        }
    
        let mapKeys = Object.keys(map)
        for(let i =0; i< mapKeys.length;i++)
        {
            if(vowels.includes(mapKeys[i]))
            {
                if(map[mapKeys[i]] > maxVow){ maxVow = map[mapKeys[i]]}
            }
            else
            {
                if(map[mapKeys[i]] > maxCons) {maxCons = map[mapKeys[i]]}
            }
        }
        return maxVow+maxCons
    };
}

console.log(maxFreqSum("successes"))