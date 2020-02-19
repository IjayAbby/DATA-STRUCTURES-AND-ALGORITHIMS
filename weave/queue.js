//implement a 'peek' method in this Queue class.
//Peek should retrn the last element (the next one
//  to be returned) from the queue *without* removing things

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

    peek(){  //checks  the last element in the queue 
        return this.data[this.data.length - 1];
    }



}

//   const q = new Queue
//   q.add(1)
//   q.add(2)
//   q.add(3)
//   q.add(4)
//   q.remove()
//   console.log(q)
  //console.log(q.peek())

  module.exports = Queue;

  