//LeetCode 242: Valid Anagram

//Approach1 TimeComplexity: O(nlogn) space: O(n)
const isAnagram =(s,t)=>{
return s.split('').sort().join('') === t.split('').sort().join("")
}

//Approach2 Time Complexity: O(n) space Complexity: O(1)
const isAnagram2 =(s,t)=>{
if(s.length !== t.length) return false
   let obj = {}
     for(let i=0; i< s.length; i++)
  {
    if(obj[s[i]]) obj[s[i]]++
    else obj[s[i]] =1
  }

  for(let i=0; i< t.length;i++)
  {
    if(obj[t[i]]< 0 || !obj[t[i]]) return false
    else --obj[t[i]]
  }
  return true
}

//Appraoch3

const isAnagram3 =(s,t)=>{
 if(s.length !== t.length) return false
   let obj1 = {}
   let obj2 = {}
  for(let i=0; i< s.length; i++)
  {
    if(obj1[s[i]]) obj1[s[i]]++
    else obj1[s[i]] =1
  }
  for(let i=0; i< t.length ;i++)
  {
    if(obj2[t[i]]) obj2[t[i]]++
    else obj2[t[i]]=1
  }
  let keys = Object.keys(obj1)
  console.log(obj1, obj2, keys)
  for(let i=0;i<keys.length; i++){
   if(obj1[keys[i]] !== obj2[keys[i]]) return false
  }
return true
}
console.log(isAnagram('anagram', 'nagaram'))