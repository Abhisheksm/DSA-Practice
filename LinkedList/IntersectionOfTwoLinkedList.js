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
