// 34.  Find First and Last Position of Element in Sorted Array
//Approach1
const Searchrange = (a, target) => {
    let l = 0
    let r = a.length - 1
    let ans = [-1, -1]
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2)
        if (target > a[m]) {
            l = m + 1
        } else if (target < a[m]) {
            r = m - 1
        } else if (target === a[m]) {
            ans[0] = m
            r = m - 1
        }
    }

    l = 0
    r = a.length - 1
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2)
        if (target > a[m]) {
            l = m + 1
        } else if (target < a[m]) {
            r = m - 1
        } else if (target === a[m]) {
            ans[1] = m
            l = m + 1
        }
    }
    return ans
}

//Appraoch2
const Searchrange2 = (a, target) => {
    let l = 0
    let r = a.length - 1
    let ans = [-1, -1]

    while (l < r) {
        let m = l + Math.floor((r - l) / 2)

        if (a[m] < target) {
            l = m + 1
        }
        else {
            r = m
        }
    }

    if (a[l] === target) ans[0] = l
    l = 0
    r = a.length - 1
    while (l < r) {
        let m = l + Math.ceil((r - l) / 2)

        if (a[m] > target) {
            r = m - 1
        }
        else {
            l = m
        }
    }

    if (a[l] === target) ans[1] = l

    return ans
}

console.log(Searchrange2([5, 7, 7, 8, 8, 10], 8))