//complete weave/queue.js
//impelement the 'weave ' function.Weave receives two queus as arguments 
//and comines the contents of each into a new, third queue
//The third queue shoild contain the *alternative* content of two queues
//THe function should handle queues of different lengths
//without inserting "undefined" into the new one
//*Do not* access the array inside of ant queue,only use the 'add'
//'remove ' and 'peek' functions
//   const queueOne = new Queue();
//     queue.add(1)
//     queue.add(2)
  
//     const queueTwo = new Queue();
//     queue.add('Hi')
//     queue.add('There')
  
//     const q = weave(queueOne,queueTwo)
//     q.remove()
//     q.remove()
//     q.remove()
//     q.remove() 

    const Queue = require('./queue');
    function weave(sourceOne,sourceTwo){
        const q = new Queue();

        while (sourceOne.peek() || sourceTwo.peek()){
            if (sourceOne.peek()){
                q.add(sourceOne.remove())
            }
                if (sourceTwo.peek()){
                    q.add(sourceTwo.remove())
                }
            
        }
        return q;
    }

    const queueOne = new Queue();
    
     queueOne.add(1)
     queueOne.add(2)
   
     const queueTwo = new Queue();

     queueTwo.add('Hi')
     queueTwo.add('There')
   
     const q = weave(queueOne,queueTwo)
     q.remove()
console.log(q)
 
