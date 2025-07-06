let arr = [1,2,3,4,5]

function Node(val){
   this.value = val
   this.next = null
}

// Create a Linked List from array.
function createLL(arr)
{
    const head = new Node(arr[0])
    let current = head
    for(let i=1; i<arr.length; i++)
    {
        current.next = new Node(arr[i])
        current = current.next
    }
    return head
}

function middleOfLinkedList(list){
   let sp = list
   let fp = list
   while(fp != null && fp.next !=null)
   {
    sp = sp.next
    fp = fp.next.next
   }
   return sp
}

console.log(middleOfLinkedList(createLL(arr)))