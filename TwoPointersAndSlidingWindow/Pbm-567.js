// 567. Permutation in String

const checInclusion = (s1, s2) =>{
    
    let hashW = Array(26).fill(0)
    let hashS = Array(26).fill(0)

    for(let i=0; i<s1.length; i++){
        hashS[s2.charCodeAt(i)-97]++
        hashW[s1.charCodeAt(i)-97]++
    }

    let i = 0
    let j = s1.length-1

    while(j<s2.length){
        if(isHashSame(hashS, hashW)){
            return true
        }else{
            hashS[s2.charCodeAt(i)-97]--
            i++
            j++
            hashS[s2.charCodeAt(j)-97]++
        }
    }

    return false

}

const isHashSame = (hashS, hashW) =>{
    for(let i=0; i<26; i++){
        if(hashS[i] !== hashW[i]) return false
    }
    return true
}

console.log(checInclusion('ab', 'eidbaooo'))