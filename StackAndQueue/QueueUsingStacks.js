//Leetcode : 232. Implement Queue using Stacks

function Queue()
{
    this.s1 = []
    this.s2 = []
}

Queue.prototype.push = function (x){
    this.s1.push(x)
}

Queue.prototype.pop = function()
{
    if(this.s2.length === 0)
    {
        while(this.s1.length)
        {
            this.s2.push(this.s1.pop())
        }
    }
    return this.s2.pop()
}

Queue.prototype.peek = function()
{
    if(this.s2.length ===0)
    {
        while(this.s1.length)
        {
            this.s2.push(this.s1.pop())
        }
    }
    return this.s2[this.s2.length-1]
}

Queue.prototype.isEmpty = function()
{
    return this.s1.length === 0 && this.s2.length ===0
}

let q1 = new Queue()
q1.push(1)
q1.push(2)
console.log(q1)
console.log(q1.peek())
console.log(q1.pop())
console.log(q1.isEmpty())