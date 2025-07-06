
function Node(val)
{
    this.val =val
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

 function printLL(head)
 {
    let curr = head
    console.log('Linked list: ')
    while(curr)
    {
        console.log(curr.val)
        curr = curr.next
    }
 }

 function oddEvenList(head)
 {
    if(!head || !head.next) return head
    let odd  =head
    let evenStart = head.next
    let even = evenStart

    while(even && even.next)
    {
        odd.next = odd.next.next
        odd = odd.next
        even.next = even.next.next
        even = even.next
    }
    odd.next = evenStart
    return head
 }

 const a = oddEvenList(createLL([2,1,3,5,6,4,7]))
 printLL(a)