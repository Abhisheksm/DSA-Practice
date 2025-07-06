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

 function removeNodes(head, value)
 {
    //Crate sentinel node which will keep track of next node.
    let sentinel = new Node(0)
    sentinel.next = head
    let curr = sentinel
    while(curr && curr.next)
    {
        if(curr.next.value === value)
        {
            curr.next = curr.next.next
        }
        else
        {
           curr = curr.next
        }
        
    }
    return sentinel.next
 }

 console.log(removeNodes(createLL([6,6,1,2,3,4,6]),6))