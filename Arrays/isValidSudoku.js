//Leetcode: 36. Valid Sudoku


var isValidSudoku = function(board) {
 const validate = (arr) =>{
     const set = new Set()
     for(let i=0; i< 9 ;i++)
     {
        if(arr[i] === '.') continue
         if(set.has(arr[i]))
         {
            return false
         }
         set.add(arr[i])
     }
     return true
    }

    for(let i=0; i<9; i++)
    {
        const result = validate(board[i])
        if(!result) return false
    }

    for(let i=0; i<9 ;i++)
    {
        let arr = []
        for(let j=0;j<9;j++)
        {
            arr.push(board[j][i])
        }
         const result =  validate(arr)
         if(!result) return false
    }

    for(let row=0; row< 9; row+=3)
    {
        for(let col =0; col<9;col+=3)
        {
            let arr = []
            for(let i=row;i<row+3;i++)
            {
                for(let j=col;j<col+3; j++)
                {
                    arr.push(board[i][j])
                }
            }
          const result =  validate(arr)
          if(!result) return false
        }
    }
    
    return true
};

console.log(isValidSudoku(
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]))