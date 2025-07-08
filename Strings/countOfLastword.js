//Given a string s consisting of words and spaces, return the length of the last word in the string.

//Approach1
function lengthOfLastWord(s)
{
    s = s.trim()
    let arr = s.split(" ")
    return arr[arr.length-1].length
}

// Approach 2
var lengthOfLastWord2 = function(s) {
    let length = s.length
    let count = 0
   for(let i=length-1; i>=0; i--)
   {
       if(s[i]===" "){
           if(count > 0) break
           else continue
       }
       else{
           count++
       }
   }
   return count
};

console.log(lengthOfLastWord2("hello world   "))