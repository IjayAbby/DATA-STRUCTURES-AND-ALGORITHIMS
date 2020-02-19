//Create a queue data structure.The queue should be a class
//with methods "add" and "remove"
//Adding to the queue should store an element until its removed
//Example
//const q = new Queue
//q.add(1)
//q.remove() //returns 1

//Queue

class Queue {
    constructor (){
        this.data = []

    }
    add(record){
        this.data.unshift(record)  //unshift method adds an element 
        //at the beggining of the array 
    }

    remove(){
        return this.data.pop()  //deletes the last element of an array
    }
}

  const q = new Queue
  q.add(1)
  q.add(2)
  q.add(3)
  q.add(4)
  q.remove()
  console.log(q)