// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones
//  you have. Each character in stones is a type of stone you have. 
//  You want to know how many of the stones you have are also jewels.



var numJewelsInStones = function(jewels, stones) {

    //Approach1:

    // let store = {}
    // for(let i=0;i< stones.length;i++)
    // {
    //     if(store[stones[i]])
    //     {
    //         store[stones[i]]+=1
    //     }
    //     else{
    //         store[stones[i]] = 1
    //     }
    // }
    // let count = 0
    // for(let i=0;i< jewels.length; i++)
    // {
    //     if(store[jewels[i]])
    //     {
    //         count = count+ store[jewels[i]]
    //     }
    // }
    // return count

     //Approach2:


    // let count = 0
    // for(let i=0; i< stones.length; i++)
    // {
    //     for(let j=0; j< jewels.length; j++)
    //     {
    //         if(stones[i]=== jewels[j])
    //         {
    //             count++
    //             break
    //         }
    //     }
    // }
    // return count

    //Approach3
    let j = new Set()
    let count =0 
    for(let i=0; i< jewels.length; i++)
    {
        j.add(jewels[i])
    }
    for(let i =0;i< stones.length; i++)
    {
        if(j.has(stones[i]))
        {
            count++
        }
    }
    return count
};

console.log(lengthOfLastWord2("aA","aAAbbbb"))