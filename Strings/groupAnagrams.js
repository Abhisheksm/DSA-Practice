//LeetCode 49. Group Anagrams

//Approach1: Time Complexity: nO(mlogm), space Complexity: O(n*m)
// Where n is size of strs array and m is size of string
var groupAnagrams = function(strs) {
    let map = {}
    for(let i=0 ;i < strs.length ;i++)
    {
        let sortedStr = strs[i].split("").sort().join("")
        if(!map[sortedStr])
        {
            map[sortedStr] = [strs[i]]
        }
        else
        {
            map[sortedStr].push(strs[i])
        }
    }
      return Object.values(map)
};

//Appraoch2: Time Complexity: O(n*m), space Complexity: O(n*m)
var groupAnagrams2 = function(strs) {
     let map = {}
    for(let i=0; i< strs.length;i++)
    {
        let freqArr = Array(26).fill(0)
        for(let j=0; j< strs[i].length ;j++)
        {
            let charIndex = strs[i][j].charCodeAt() - 'a'.charCodeAt()
            freqArr[charIndex]++
        }
        if(!map[freqArr])
        {
            map[freqArr] = [strs[i]]
        }
        else{
            map[freqArr].push(strs[i])
        }
    }
      return Object.values(map)
};