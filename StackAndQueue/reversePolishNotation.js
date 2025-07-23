//LeetCode: 150. Evaluate Reverse Polish Notation

var evalRPN = function (tokens) {
    let result = []
    let op1, op2, value = 0
    for (let i = 0; i < tokens.length; i++) {
        if (!isNaN(tokens[i])) { result.push(Number(tokens[i])) }
        else {
            op1 = result.pop()
            op2 = result.pop()
            switch (tokens[i]) {
                case '+':
                    value = op2 + op1
                    break;
                case '-':
                    value = op2 - op1
                    break;
                case '*':
                    value = op2 * op1
                    break;
                case '/':
                    value = op2 / op1 < 0 ? Math.ceil(op2 / op1) : Math.floor(op2 / op1)
                    break;
                default:
                    value = 0
            }
            result.push(value)
        }
    }
    return result.pop()
};

//Using If else
var evalRPN2 = function (tokens) {
    let result = []
    let op1, op2, value = 0
    for (let i = 0; i < tokens.length; i++) {
        if (!isNaN(tokens[i])) { result.push(Number(tokens[i])) }
        else {
            op1 = result.pop()
            op2 = result.pop()
            if (tokens[i] === '+') {
                value = op2 + op1
            }
            else if (tokens[i] === '-') {
                value = op2 - op1
            }
            else if (tokens[i] === '*') {
                value = op2 * op1
            }
            else if (tokens[i] === '/') {
                value = op2 / op1 < 0 ? Math.ceil(op2 / op1) : Math.floor(op2 / op1)
            }
            result.push(value)
        }
    }
    return result.pop()
};

var evalRPN3 = function (tokens) {
    let result = []
    let op1, op2, value=0
    const map = {
        '+' : (a,b)=>(b+a),
        '-' : (a,b)=> (b-a),
        '*' : (a,b) => (b*a),
        '/': (a,b) => Math.trunc(b/a)
    }
    for (let i = 0; i < tokens.length; i++) {
        if(map[tokens[i]])
        {
            op1 = result.pop()
            op2 = result.pop()
            value = map[tokens[i]](+op1,+op2)
            result.push(value)
        }
        else
        {
            result.push(tokens[i])
        }
    }
    return result.pop()
};

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))