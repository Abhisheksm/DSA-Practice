// Remove duplicates from sorted list

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

function deleteDuplicates(head) {
    let curr = head
    while(curr && curr.next)
    {
        if(curr.val === curr.next.val){
            curr.next = curr.next.next
        }
        else
        {   
            curr = curr.next
        }
    }
    return head
};
console.log(deleteDuplicates(createLL([1,1,2,3,3])))
printLL(deleteDuplicates(createLL([1,1,2,3,3])))