
const secondLargestNumber = (arr) => {

    let firstLargest = -Infinity
    let secondLargest = -Infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest
            firstLargest = arr[i]
        }
        else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
            secondLargest = arr[i]
        }
    }

    return secondLargest
}



const result = secondLargestNumber([1, 10, 11, 9, 7, 4, 8])
console.log(result)