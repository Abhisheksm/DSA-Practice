/*
 * Dequeue or Double-Ended Queue:
 - It is data structure that allows for insertion and deletion of elements from both the front 
   and the rear ends.
 - In Javascript there is no built in dequeue so we can acheive it using arrays.

 - Queues which always maintains the maximum element at the front known as Monotonus decresing dequeue.

*/

/*
239. Sliding Window Maximum
nums = [1,3,-1,-3,5,3,6,7], k = 3
output: [3,3,5,5,6,7]

- Take two pointers i and j, start both pointers from 0th position.
- Take an deque and add elemnts in it, if last element of dequeue is less then the current element
  then remove elements from the dequeue untill last element is less then current element.
- Perfrom operation untill the size of window, once size of window is reached then you get left most
  element  (First element of dequeue) as the max element.
*/

const maxSlidingWindow =(nums,k)=>{
  let ans = []
  let q = []
  let i=0, j=0;

  while(j<nums.length){
    while(q.length && q[q.length-1] < nums[j]){
        q.pop()
    }
    q.push(nums[j])

    if(j>=k-1){
        ans.push(q[0])
        if(q[0] === nums[i]){
            q.shift()
        }
        i++
    }
    j++
  }
  
  return ans
}

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3))



var maxSlidingWindow2 = function (nums, k) {
    let ans = []
    let deque = []
    let i = 0
    let j = 0
    while (j < nums.length) {
        while (j < i + k) {
            while(deque.length && deque[deque.length - 1] < nums[j]) {
                deque.pop()
            }
            deque.push(nums[j])
            j++
        }
        ans.push(deque[0])
        if (deque[0] === nums[i]) {
            deque.shift()
        }
        i++
    }
    return ans
};