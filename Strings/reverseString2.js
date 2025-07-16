// Leetcode 541: Reverse String II


const reverseStr2 = (s, k) =>{
  s = s.split('')
  for(let i=0;i<s.length;i=i+4)
  {
    let length = k
    let mid = Math.floor(length/2)
    for(let j=0; j< mid;j++)
    {
        let temp = s[i+j]
        s[i+j] = s[k-1-(i+j)]
        s[k-1-(i+j)] = temp
    }
  }
  return s.join('')
}

//Refer reverse string pbm to understand above code.
function reverseStr(s,mid){
   s = s.split('')
   let mid = Math.floor(s.length/2)
   for(let i=0; i<mid; i++)
   {
     let temp = s[i]
     s[i] = s[s.length-1-i]
     s[s.length-1-i] = temp
   }

   return s
}

console.log(reverseStr2('abcdefg', 2))