//424.  Longest Repeating Character Replacement


//Using Map
var characterReplacement = function (s, k) {
    let map = {}
    map[s[0]] = 1
    let i = 0
    let j = 0
    let maxWindow = 0
    let window = 0
    while (j < s.length) {
        if (isWindowValid(map, k)) {
            window = j - i + 1
            maxWindow = Math.max(maxWindow, window)
            j++
            map[s[j]] = map[s[j]] ? ++map[s[j]] : 1
        } else {
            map[s[i]]--
            i++
        }
    }
    return maxWindow
};

const isWindowValid = (map, k) => {
    let count = 0, maxCount = 0
    for (let i = 0; i < 26; i++) {
        let char = String.fromCharCode(i + 65)
        if(map[char]) {
            count = count + map[char]
            maxCount = Math.max(map[char], maxCount)
        }
    }

    return (count - maxCount <= k)
}


//Using Array

var characterReplacement2 = function (s, k) {
    let map = []
    map[s.charCodeAt(0)-65] = 1
    let i = 0
    let j = 0
    let maxWindow = 0
    let window = 0
    while (j < s.length) {
        if (isWindowValid(map, k)) {
            window = j - i + 1
            maxWindow = Math.max(maxWindow, window)
            j++
            map[s.charCodeAt(j)-65] = map[s.charCodeAt(j)-65] ? ++map[s.charCodeAt(j)-65] : 1
        } else {
            map[s.charCodeAt(i)-65]--
            i++
        }
    }
    return maxWindow
};

const isWindowValid2 = (map, k) => {
    let count = 0, maxCount = 0
    for (let i = 0; i < 26; i++) {
        if(map[i]) {
            count = count + map[i]
            maxCount = Math.max(map[i], maxCount)
        }
    }
  
    return (count - maxCount <= k)
}

console.log(characterReplacement("AABABBA", 1))