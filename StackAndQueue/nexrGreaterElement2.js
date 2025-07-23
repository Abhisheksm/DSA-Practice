//503. Next Greater Element II

//Whnever you get circular questions, try by doubling the array or by running loop on 2 times of 
// array size and using % operator. (i % array.size) 
//By doubling the array
var nextGreaterElements = function(nums) {
   let arr = [...nums,...nums]
   let n = arr.length-1
   let stack = []
   let result = []
   for(let i = n; i>=0; i--)
   {
    while(stack.length)
    {
      if(arr[i] >= stack[stack.length-1])
      {
        stack.pop()
      }
      else{
        result[i] = stack[stack.length-1]
        break
      }
    }
    if(stack.length === 0)
    {
        result[i] = -1
    }
    stack.push(arr[i])
   }
   return result
};

//Approach2: By dlooping over two time os array size and using % operator. (i % array.size) 
var nextGreaterElements2 = function(arr) {
   let n = arr.length
   let stack = []
   let result = []
   for(let i = (n*2)-1; i>=0; i--)
   {
    while(stack.length)
    {
      if(arr[i%n] >= stack[stack.length-1])
      {
        stack.pop()
      }
      else{
        result[i%n] = stack[stack.length-1]
        break
      }
    }
    if(stack.length === 0)
    {
        result[i%n] = -1
    }
    stack.push(arr[i%n])
   }
   return result
};


console.log(nextGreaterElements([1,2,1]))