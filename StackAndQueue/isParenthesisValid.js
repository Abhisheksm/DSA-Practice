//  20. Valid Parentheses


//Approach1
const isValid = function (s){
   if(s.length %2 !== 0) return false
   let stack =[]
   for(let i=0;i<s.length;i++)
   {
    if(s[i] === '(' || s[i]==='[' || s[i]==='{')
    {
        stack.push(s[i])
    }
    else{
        if(s[i] === ')' && stack.pop() !== '(')
        {
            return false
        }
        if(s[i] === ']' && stack.pop() !== '[')
        {
            return false
        }
        if(s[i] === '}' && stack.pop() !== '{')
        {
            return false
        }
    }
   }
   return true
}

//Approach2 : 
const isValid2 = function(s){
     if(s.length %2 !== 0) return false
     let stack = []
     const map = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
     }

     for(let i=0; i< s.length ;i++)
     {
        if(map[s[i]])
        {
            stack.push(s[i])
        }else{
            let top = stack.pop()
            if(map[top] !== s[i]) return false
        }
     }
     return true
}

console.log(isValid2("[{(()[]{})}]"))