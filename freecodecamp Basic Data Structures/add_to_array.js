// In this challenge, we will look at two methods with which we can programmatically modify an array: Array.push() and Array.unshift().

// Both methods take one or more elements as parameters and add those elements to the array the method is being called on; the push() method adds elements to the end of an array, and unshift() adds elements to the beginning. 

// We have defined a function, mixedNumbers, which we are passing an array as an argument. Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order.

function mixedNumbers(arr) {
    // Only change code below this line

    arr.push(7, 'VIII', 9)
    arr.unshift('I', 2, 'three')
    
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));

//output [ 'I', 2, 'three', 'IV', 5, 'six', 7, 'VIII', 9 ]