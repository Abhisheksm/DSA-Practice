// 1. Two Sum

const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j]
        }
    }
}

const twoSum2 = (nums, target) => {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i
    }

    console.log(map)

    for (let i = 0; i < nums.length; i++) {
        if (map[target - nums[i]] && i !== map[target - nums[i]]) {
            return [i, map[target - nums[i]]]
        }
    }
}

console.log(twoSum2([2, 7, 11, 15], 9))