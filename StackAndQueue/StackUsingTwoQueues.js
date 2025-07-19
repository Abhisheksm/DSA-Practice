//Leetcode : 225. Implement Stack using Queues


//Using two Queues
function Stack (){
    this.q1 = []
    this.q2 =[]
}

Stack.prototype.push = function(x){
    this.q1.push(x)
}

Stack.prototype.pop = function()
{
    let n = this.q1.length
    for(let i=0;i<n-1;i++)
    {
        this.q2.push(this.q1.shift())
    }
    let lastElement = this.q1.shift()
    let temp = this.q1
    this.q1 = this.q2
    this.q2 = temp

    return lastElement
}

Stack.prototype.top = function(){
    let n = this.q1.length
    for(let i=0; i< n-1; i++)
    {
        this.q2.push(this.q1.shift())
    }
    let frontEle = this.q1[0]
    this.q2.push(this.q1.shift())
    let temp = this.q1
    this.q1 = this.q2
    this.q2 = temp

    return frontEle
}

Stack.prototype.isEmpty = function()
{
    return this.q1.length === 0
}

let myStack = new Stack()
myStack.push(1)
myStack.push(2)
console.log(myStack)
console.log(myStack.pop())
console.log(myStack.top())
console.log(myStack)
console.log(myStack.isEmpty())


//Using one queue
Stack.prototype.push = function(x){
    this.q1.push(x)
}

Stack.prototype.pop = function()
{
    let n = this.q1.length
    for(let i=0;i<n-1;i++)
    {
        this.q1.push(this.q1.shift())
    }
    let lastElement = this.q1.shift()
   
    return lastElement
}

Stack.prototype.top = function(){
    let n = this.q1.length
    for(let i=0; i< n-1; i++)
    {
        this.q1.push(this.q1.shift())
    }
    let frontEle = this.q1[0]
    this.q1.push(this.q1.shift())

    return frontEle
}

Stack.prototype.isEmpty = function()
{
    return this.q1.length === 0
}
