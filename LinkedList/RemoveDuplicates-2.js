//Given the head of a sorted linked list, delete all nodes that have duplicate numbers, 
// leaving only distinct numbers from the original list. Return the linked list sorted as well.

function Node(val)
{
    this.val = val
    this.next = null
}

function createLL(arr)
{
   let head = new Node([arr[0]])
   let curr = head
   for(let i=1; i<arr.length;i++)
   {
    curr.next = new Node([arr[i]])
    curr = curr.next
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

function deleteDuplictas(head)
{
    if(!head || !head.next) return head
    let prev = head
    let curr = head.next
    let newNode = new Node()
    let p = newNode
    while(prev)
    {
        if(curr && (prev.val === curr?.val) )
        {
            let value = prev.val
            while(prev && (prev.val === value)){
                prev = prev.next
                curr = curr && curr.next
            }
        }
        else
        {
            p.next = new Node(prev.val)
            p = p.next
            prev = prev.next
            curr = curr && curr.next
        }
    }
    return newNode.next
}

printLL(deleteDuplictas(createLL([1,2,3,3,4,4,4,5,6])))