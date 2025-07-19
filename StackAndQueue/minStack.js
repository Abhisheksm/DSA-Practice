//LeetCode 155. Min Stack

function minStack(){
    this.s =[]
}

minStack.prototype.push = function(val){
    if(this.s.length)
    {
        let minValue = Math.min(val, this.s[this.s.length-1][1])
        this.s.push([val,minValue])
    }
    else{
        this.s.push([val, val])
    }
}

minStack,prototype.pop = function()
{
    this.s.pop()
}

minStack.prototype.top = function() {
    return this.s[this.s.length-1][0]
};

minStack.prototype.getMin = function() {
    return this.s[this.s.length-1][1]
};
