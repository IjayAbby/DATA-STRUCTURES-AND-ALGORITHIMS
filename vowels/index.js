//Write a function that return the number of vowels
//used in a string vowels are characters a,e,i,o,u
//Examples 
//vowels (Hi there !)  //3 vowels i,e,e

// function vowels (str){
//     const matches = str.match(/[aeiou]/gi);
//     return matches ? matches.length: 0
// }


// function vowels(str){
//     let count = 0
//     const checker = ['a','e','i','o','u'];
//     for (let char of str.toLowerCase()){
//         if (checker.includes(char)){
//             count++
//         }
//     }
//     return count;
// }
console.log(vowels('rythmn'))
console.log(vowels('vowels uses a regular expression'))