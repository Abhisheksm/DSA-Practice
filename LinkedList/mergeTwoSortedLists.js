//Merge two sorted list

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

 //Approach1 : every time creating a new node
 function mergeSortedLists(list1, list2)
{
    let l1 = list1
    let l2 = list2
    let newNode = new Node(0)
    let curr = newNode
    while(l1||l2)
    {
        if(!l2 || ((l1?.val|| 0) < (l2?.val || 0) && l1)){
            curr.next = new Node(l1.val)
            curr = curr.next
            l1 = l1.next
        }
        else
        {
            curr.next = new Node(l2.val)
            curr = curr.next
            l2 = l2.next
        }
    }
    return newNode.next
}

//Approach2: Without creating a new node
function mergeSortedLists2(list1, list2)
{
let l1 = list1
let l2 = list2
let newNode = new Node(0)
let curr = newNode

while(l1 && l2)
{
    if(l1.val< l2.val)
    {
      curr.next = l1
      l1 = l1.next
    }
    else{
      curr.next = l2
      l2 = l2.next
    }
    curr= curr.next
}
if(!l1)
    {
        curr.next = l2
    }
    if(!l2)
    {
        curr.next = l1
    }
return newNode.next
}
printLL(mergeSortedLists2(createLL([1,2,3,4,5]),createLL([1,2,4,7,8,9,10])))