// You are given a 0-indexed array of strings words and a character x.

// Return an array of indices representing the words that contain the character x.

//Approach1
var findWordsContaining = function(words, x) {
    let arr =[]
    for(let i=0; i<words.length;i++)
    {
        for(let j=0; j< words[i].length;j++)
        {
            if(words[i][j] ===x)
            {
                arr.push(i)
                arrIndex++
                break
            }
        }
    }
    return arr
};

//Apprach2
var findWordsContaining2 = function(words, x) {
    let arr =[]
    for(let i=0; i<words.length;i++)
    {
        if(words[i].includes(x))
        {
            arr.push(i)
        }
    }
    return arr
};

console.log(findWordsContaining2(["abc","bcd","aaaa","cbc"], 'a'))
