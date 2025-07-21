// Leetcode: 1021. Remove Outermost Parentheses

var removeOuterParentheses = function(s) {
    let stack = []
    let output = ""
    let n = s.length
    for(let i=0;i<n;i++)
    { 
       if(s[i] === '(')
       {
        stack.push(s[i])
        if(stack.length > 1)
        {
            output+=s[i]
        }
       }
       else
       {
         if(stack.length > 1)
        {
            output+=s[i]
        }
        stack.pop()
       }
    }
    return output
};

//Without using Stack

var removeOuterParentheses2 = function(s) {
    let level = 0
    let output = ""
    let n = s.length
    for(let i=0;i<n;i++)
    { 
       if(s[i] === '(')
       {
        level++
        if(level > 1)
        {
            output+=s[i]
        }
       }
       else
       {
         if(level > 1)
        {
            output+=s[i]
        }
        level--
       }
    }
    return output
};

console.log(removeOuterParentheses2("(()())(())(()(()))"))