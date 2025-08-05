// Check for the intersection node of two linked list.

// Head A->1->2->3->4->5->6->7->null
//                  ^  
// Head B->4->1->2->5

// Here $ is the Intersection point of two linked list

//Program 1: Using Brute force Approach

function findIntersection(headA, headB)
{
    let currA = headA
    while(currA)
    {
        let currB = headB
        while(currB)
            {
              if(currA=== currB) return currA
              currB = currB.next
            }  
            currA = currA.next
    }
    return null
}

// Approach 2: Using Hash Map

// HAshmap has O(1) time comeplexity to search elemnt in hashmap
function findIntersection(headA, headB)
{
    let store = new Set()
    let currA = headA
    let currB = headB
    while(currB)
    {
        store.add(currB)
        currB = currB.next
    }

    while(currA)
    {
        if(store.has(currA)) return currA
        currA = currA.next
    }

    return null
}

//Apprach3
function findIntersection(headA, headB)
{
    let m = 0
    let curr = headA
    // 1. Find length of HeadA
    while (curr) {
        m++
        curr = curr.next
    }

    //find lengt of HeadB
    let n = 0
    let currB = headB
    while (currB) {
        n++
        currB = currB.next
    }

    let j = headA
    let k = headB

    // Find difference and move pointer till that difference
    if (n > m) {
        for (let i = 0; i < n - m; i++) {
            k = k.next
        }
    } else {
        for (let i = 0; i < m - n; i++) {
            j = j.next
        }
    }

    //Compare nodes
    while (j) {
        if (j === k) {
            return j
        }
        j = j.next
        k = k.next
    }

    return null
  
}

//Apprach4

function findIntersection(headA, headB)
{
  let pA = headA
  let pB = headB

  while(pA !== pB){
    pA = pA === null ? HeadB : pA.next
    pB = pB === null ? HeadA : pB.next
  }

  return pA
}
  
