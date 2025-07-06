let arr = [1,2,3,4,5]


function Node(val){
    this.value = val
    this.next = null
 }

 function createLL(arr){
    const head = new Node(arr[0])
    let current = head
    for(let i=1; i< arr.length;i++)
    {
        current.next = new Node([arr[i]])
        current = current.next
    }
    return head
 }

 function reverseLinkedList(list)
 {
     let prev = null
     let current = list
     while(current)
     {
        let temp = current.next
        current.next = prev
        prev = current
        current = temp
     }
     list = prev
     return list
 }

 console.log(reverseLinkedList(createLL(arr)))