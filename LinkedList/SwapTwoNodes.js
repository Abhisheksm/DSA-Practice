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

function swapPairs(head)
{
    if(!head || !head.next) return head
    let newNode = new Node(0)
    newNode.next = head
    let l = head
    let r = head.next
    let prev = newNode
    while(l && l.next)
    {
      prev.next = r
      l.next = r.next
      r.next = l
      prev = l
      l = prev.next
      r = l && l.next
    }

    return newNode.next
}

function swapPairsWithRecursion(head){
    if(!head || !head.next) return head
    let l = head
    let r = l.next
    l.next = swapPairs(r.next)
    r.next = l
    return r
}

printLL(swapPairs(createLL([1,2,3,4,5,6])))