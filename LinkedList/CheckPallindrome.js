function createLL(arr)
{
    let head = new Node(arr[0])
    let current = head
    for(let i=1; i< arr.length; i++)
    {
        current.next = new Node(arr[i])
        current = current.next
    }
    return head
}

var isPalindrome = function(head) {
    let slow= fast = head

    //Find Mid
    while(fast && fast.next)
    {
        slow = slow.next
        fast = fast.next.next
    }

    //Reverse the linked list from  mid node
    let prev = null
    let current = slow
    while(current)
    {
        let temp = current.next
        current.next = prev
        prev = current
        current =temp
    }
    
    //Check for Pallindrome
    let fl = prev
    let sl = head
    while(fl)
    {
        if(fl.val != sl.val) return false
        fl = fl.next
        sl = sl.next
    }
    return true
};

console.log(isPalindrome(createLL([1,2])))