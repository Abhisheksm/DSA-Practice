//739. Daily Temperatures

var dailyTemperatures = function(temperatures) {
   let stack = []
    let result = []
    for(let i=temperatures.length-1; i>=0;i--){
        while(stack.length)
        {
           if(temperatures[i]>= temperatures[stack[stack.length-1]])
           {
              stack.pop()
           }
           else{
            result[i] = stack[stack.length-1] - i
            break
           }
        }
        if(stack.length === 0)
        {
            result[i] = 0
        }
        stack.push(i)
    }
    return result
};


console.log(dailyTemperatures([89,62,70,58,47,47,46,76,100,70]))