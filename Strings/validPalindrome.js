const isPalindrome =(s)=>{

    //Approach1 : Time Complexity: O(n) Space Complexity: O(2n)
    s = s.toLowerCase()
    let filteredString =''
    let rev =''
    for(let i=0;i< s.length;i++)
    {
        if(s[i].match(/[a-z0-9]/i))
        {
            filteredString += s[i]
            rev = s[i]+rev
        }
    }
    return filteredString === rev
}

//Approach2
const isPalindrome2 = (s) =>{
    s = s.toLowerCase()
   let i = 0
   let j = s.length-1
   while(i<j)
   {
    if(!(s[i].match(/[a-z0-9]/i)))
    {
       i++
    }
    else if(!(s[j].match(/[a-z0-9]/i)))
    {
       j--
    }
    else if(s[i] === s[j])
    {
     i++
     j--
    }
    else{
return false
    }
   }
   return true
}

//Appraoch3
var isPalindrome3 = function(s) {
    s = s.toLowerCase()
     let a = s.replace(/[^a-z0-9]/g,'')
    let mid = Math.floor(a.length/2)
    for(let i=0; i< mid;i++)
    {
        if(a[i] !== a[a.length-1-i])
        {
            return false
        }
    }
    return true
};

console.log(isPalindrome3("A man, a plan, a canal: Panama"))