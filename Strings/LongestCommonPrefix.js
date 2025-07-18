//LeetCode 14: Longest Common Prefix

//Approach 1
const longestCommonPrefix = (strs) =>{
   let x = 0
   while(x < strs[0].length)
   {
    let char = strs[0][x]
    for(let i=1; i< strs.length ;i++)
    {
        if(char !== strs[i][x] || !strs[i].length)
        {
            return strs[0].substring(0,x)
        }
    }
    x++
   }
   return strs[0]
}

//Approach2
var longestCommonPrefix2 = function(strs) {
  let prefix = ''
  let flag = false
  for(let i=0;i<strs[0].length;i++)
  {
    for(let j=0; j< strs.length; j++)
    {
        let char = strs[0][i]
        if(strs[j][i] === char)
        {
            flag = true
        }
        else
        {
            flag = false
            return prefix
        }
    }
    if(flag)  prefix+=strs[0][i]
  }  
  return prefix
};

console.log(longestCommonPrefix(["flower","flow","flight"]))