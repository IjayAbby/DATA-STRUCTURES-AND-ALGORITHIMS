//Implement a Queue datastructure  using two stacks
//*Do not * create an array  

const Stack = require ('./stack');
class Queue {
    constructor(){
        this.first = new Stack();
        this.second = new Stack();
    }

    add(record){
        this.first.push(record)
    }
    //['a','b','c'] = stack     LIFO
    //['a','b','c'] = queue     FIFO
    remove() {
        while(this.first.peek()){
            this.second.push(this.first.pop())
        }

        const record = this.second.pop();

        while (this.second.peek()){
            this.first.push(this.second.pop())
        }
        return record;
    }

    peek(){

    while (this.first.peek()){
            this.second.push(this.first.pop())
        }

        const record = this.second.peek();

        while(this.second.peek()){
            this.first.push(this.second.pop())
        }

        return record;
    }

}
const q = new Queue;
q.add(1);
q.add(2);
q.add(3);
//q.peek();
q.remove();
q.peek();
q.remove();
q.peek();
q.peek();
console.log(q);