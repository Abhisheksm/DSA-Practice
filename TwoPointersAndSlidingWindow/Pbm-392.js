//392: Is Subsequence

var isSubsequence = function(s, t) {
    let i = 0 , j=0
    let tLength = t.length

    // With for loop
    // for(let i =0 ; i< t.length ; i++){
    //      if(t[i] === s[j]){  
    //         j++
    //         sLength--
    //     }
    // }

    while(tLength!==0 ){
        if(t[i] === s[j]){  
            j++
        }
        i++
        tLength--
    }

    return s.length === j
};


console.log(isSubsequence("abc","ahbgdc"))  //true