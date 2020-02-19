//Create a stack data structure .The stack should be a class with 
//methods 'push' ,'pop', and 'peek'.Adding an element to the stack should
//store it until removed 
//Examples
//const s = new Stack();
//s.push(1)
//s.push(2)
//s.pop(); //returns 1
//s.pop(); //returns 2
class Stack{
   constructor(){
      this.data = []
   } 

   push(record){
      this.data.push(record)
   }
   pop(){
      return this.data.pop()
   }
   peek(){
      return this.data[this.data.length - 1]
   }
}

const s = new Stack();
s.push('Hello There')
s.push('Today is Wednesday');
s.pop();


console.log(s);
//[5,4,1,2,3] - Principal of a queue using unshift method to add FIFO
//[1,2,3,4,5] - Principal of a stack using the push method LIFO

module.exports = stack;