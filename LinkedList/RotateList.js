//Given the head of a linked list, rotate the list to the right by k places.

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

 function rotateRight(head, k){
   let length = 0
   let curr = head
   while(curr)
   {
    length++
    curr = curr.next
   }
   k = k%length
   let f = head
   let s = head
   for(let i=0; i<k; i++)
   {
     f = f.next
   }
   while(f && f.next)
   {
    f = f.next
    s = s.next
   }
   f.next = head
   let newHead = s.next
   s.next = null
   return newHead
 }

 printLL(rotateRight(createLL([1,2,3,4,5],2)))