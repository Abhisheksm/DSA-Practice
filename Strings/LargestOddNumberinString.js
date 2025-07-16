//LeetCode-1903 : Largest Odd Number in String 

const largestOddNumber = (s)=>{
  let n = s.length-1
  while(n>=0)
  {
    if(s[n]%2===1)
    {
        return s.substring(0,n+1)
    }
    n--
  }
  return ""
}

console.log(largestOddNumber("1111111111111112"))