
//My Solution

function addTwoNumbers(l1 , l2)
{
     let a =l1
    let b =l2
    let newList = new ListNode(0)
    let newHead = newList
    
    let carry = 0
    while(a || b)
    {
      let sum = (a?.val || 0) + (b?.val || 0) +carry

      if(sum>9)
      {
        tenthDigit = sum%10
        newHead.next = new ListNode(tenthDigit)
        newHead = newHead.next
        carry =1
      }
      else
      {
        if(sum+carry > 9)
        {
        tenthDigit = sum%10
        newHead.next = new ListNode(tenthDigit) 
        newHead = newHead.next
        }
        else
        {
          newHead.next = new ListNode(sum)
          newHead = newHead.next
        }
        carry =0
      }
      a = a && a.next 
      b = b && b.next 
    }
    if(carry===1)
    {
        newHead.next = new ListNode(1)
    }
    return newList.next
}

// SecondSolution

function addTwoNumbers2(l1, l2)
{
    let newNode = new ListNode()
let ans = newNode
let carry = 0

while(l1 || l2 || carry)
{
    let sum = (l1?.val || 0) + (l2?.val || 0)+carry
    carry = Math.floor(sum/10)
    let digit = sum%10

    ans.next = new ListNode(digit)
    ans = ans.next
    l1 = l1 && l1.next
    l2 = l2 && l2.next
}

return newNode.next
}