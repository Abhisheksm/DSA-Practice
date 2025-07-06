// Remove given nth Node from the back of the linked list.


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

//Approach1 -> Two pass -> Traversing two time 
function removenthFromEnd(head, n)
{
    //find the length of the list
    let curr = head
    let length = 0
    while(curr)
    {
      length++
      curr = curr.next
    }

    //Add sentinel Node
    let sentinel = new Node(0)
    sentinel.next = head
    let prev = sentinel
    let prevNodeIndex = length -n
    for(let i=0;i< prevNodeIndex ;i++)
    {
        prev = prev.next
    }
    prev.next = prev.next.next

    return sentinel.next
}

//Approch2: one Pass

function removenthFromEnd2(head, n)
{
    // we will use two poinets first and second
    //first pointer will start from head and second will start from nth node

    //Add sentinel node
    let sentinel = new Node(0)
    sentinel.next = head
    let first = sentinel
    for(let i=0;i<n;i++)
    {
        first = first.next
    }
    let second = sentinel
    while(first && first.next)
    {
      second= second.next
      first = first.next
    }
    second.next = second.next.next
    return sentinel.next
}

// removenthFromEnd(createLL([1,2,3,4,5]),3)
printLL(removenthFromEnd(createLL([1,2,3,4,5]),1))
printLL(removenthFromEnd2(createLL([1,2,3,4,5]),5))