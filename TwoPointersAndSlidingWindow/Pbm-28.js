// 28. Find the Index of the First Occurrence in a String

// Approach1
const strStr = (n,m)=>{
  let nLen = n.length
  let mLen = m.length

  for(let i=0; i<=nLen+mLen; i++){
    let j= 0
    for(j = 0 ;j< mLen ;j++){
        if(n[i+j] !== m[j]) break
    }
    if(j === mLen) return i
  }
  return -1
}

//Approach2 : Using Knuth Morris Pratt Algorithm

const strStr2 = (haystick,needle) =>{
  let m = haystick.length
  let n = needle.length
 
  let i =0;
  let j = 1
  let lps = [0]
  //Find Lps Array of needle
  while(j<n){
    if(needle[i] === needle[j]){
      lps[j] = i+1
      i++
      j++
    }else{
        if(i===0){
            lps[j] = 0
            j++
        }else{
            i = lps[i-1]
        }
    }
  }

  // Compare strings
  i =0, j=0
  while(i<m){
    if(haystick[i]===needle[j]){
        i++
        j++
    }else{
        if(j===0){
          i++ 
        }else{
          j = lps[j-1]
        }
    }
    if(j===n){
        return i-n
    }
  }

}

console.log(strStr2('mississippi','issip'))