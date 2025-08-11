//3. Longest Substring Without Repeating Characters

const lengthOfLongestSubstring = s=> { 
 let map = {}
 let j = 0 
 let maxWindow = 0

 for(let i=0; i< s.length; i++){
    if(map[s[i]] !== undefined && map[s[i]] >= j){
        j = map[s[i]]+1
    }
    map[s[i]] = i
    let window = (i-j)+1
    if(window>maxWindow) maxWindow= window
 }

return maxWindow
}

console.log(lengthOfLongestSubstring("abcdefabcbbdef"))