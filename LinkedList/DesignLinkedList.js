function Node(value){
   this.value = value
   this.next = null
}

function LinkedList(){
    this.head = null
    this.size = 0
}

const list= new LinkedList()

// const node1 = new Node(1)
// const node2 = new Node(2)
// const node3 = new Node(3)

// node1.next = node2
// node2.next = node3

// list.head = node1



LinkedList.prototype.addNodeatHead=function(value){
   let newNode = new Node(value)
   newNode.next = this.head
   this.head = newNode
}



LinkedList.prototype.addNodeatIndex = function(index, value){

    // let currentIndex = 0
    // let newNode = new Node(value)
    // let current = this.head
    // while(current && currentIndex< index)
    // {
    //     console.log('ran while loop')
    //   if(currentIndex === index-1){
    //      newNode.next = current.next
    //      current.next = newNode
    //      break
    //   }
    //   current = current.next
    //   currentIndex++
    // }
    let newNode  = new Node(value)
    if(this.head === null || index ===0)
    {
        this.addNodeatHead(value)
        return
    }
    else if(index === this.size)
    {
        this.addAtTail(value)
        return
    }
    else{
        let current = this.head
        for(let i=0; i< index-1;i++)
        {
            current = current.next
        }
        newNode.next = current.next
        current.next = newNode
    }
    this.size++
    
}



LinkedList.prototype.addAtTail = function(val) {
    // let newNode = new Node(val)
    // let current = this.head
    // while(current)
    // {
    //   if(current.next === null)
    //   {
    //       current.next = newNode
    //       newNode.next = null
    //       this.size++
    //   }
    //   current = current.next
    // }
    // return null

    let newNode = new Node(val)
    if(this.head === null)
    {
        this.head = newNode
    }
    else{
        let current = this.head
        while(current.next !== null)
        {
            current = current.next
        }
        current.next = newNode
        
    }
    this.size++
    
  };

 

  LinkedList.prototype.deleteAtIndex = function(index) {
    // let currentIndex = 0
    // let current = this.head
    // while(current)
    // {
    //     if(currentIndex===index-1)
    //     {
    //         current.next = current.next.next
    //         this.size--
    //         break
    //     }
    //     current = current.next
    //     currentIndex++
    // }
    let current = this.head
    if(index<0 || index>=this.size) return
    if(index === 0)
    {
        this.head = this.head.next
    }
    else{
        for(let i=0;i< index-1 ;i++)
        {
            current = current.next
        }
        current.next = current.next.next
    }
    this.size--
};



LinkedList.prototype.get = function(index) {
    // let currentIndex = 0
    // let current = this.head
    // while(current)
    // {
    //     if(index===currentIndex)
    //     {
    //         return current.value
    //     }
    //     current = current.next
    //     currentIndex++
    // }
    let current = this.head
    if(index < 0 || index>=this.size)
    {
        return -1
    }
    else
    {
        for(let i=0; i< index; i++)
        {
            current = current.next
        }
    }
    return current.value
};

list.addNodeatHead(1)
list.addAtTail(3)
list.addNodeatIndex(1, 2)
console.log(list.get(1))
list.deleteAtIndex(1)
console.log(list.get(1))


// let current = list.head
// while(current)
// {
//     console.log(current.value)
//     current = current.next
// }