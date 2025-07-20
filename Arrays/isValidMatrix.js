//Leetcode: 2133. Check if Every Row and Column Contains All Numbers

var checkValid = function(matrix) {
     for(let i=0; i<matrix.length ;i++)
    {
        const set = new Set(matrix[i])
        if(set.size !== matrix.length) return false
    }

    for(let i=0; i< matrix.length ;i++)
    {
        let arr =[]
        for(let j=0; j<matrix.length ;j++){
          arr.push(matrix[j][i])
        }
        const set = new Set(arr)
        if(set.size !== matrix.length) return false
    }
    return true
};

//Approach2: 

const isValid2 = (matrix) =>{
       const validate = (arr) =>{
        let set = new Set()
        for(let i=0 ; i< arr.length ;i++)
        {
            if(set.has(arr[i])) return false
            set.add(arr[i])
        }
        return true
    }

    for(let i=0; i<matrix.length ;i++)
    {
        const result = validate(matrix[i])
        if(!result) return false
    }

    for(let i=0; i< matrix[0].length ;i++)
    {
        let arr =[]
        for(let j=0; j<matrix.length ;j++){
          arr.push(matrix[j][i])
        }
         const result = validate(arr)
        if(!result) return false
    }
    return true
}

console.log(isvalid([[1,2,3],[3,1,2],[2,3,1]]))