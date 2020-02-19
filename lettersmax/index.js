//maxcharacter represents the most commonly used 
//Example 11111345 maxChar === 1;

// function maxChar(str){
//     const charMap = {}
// }

//EXAMPLE TO THE CHARACTERS NUMBER
// var str = 'jewel';
//  const char = {}

//  for (let data of str){
//     if(char[data]){
//         char[data]++

//     } else {
//         char[data] = 1
//     }
// }
 //console.log(char)

 function maxChar(str){
 const charMap = {};
let max = 0;
let maxChar = '';

 for (let char of str){
    if(charMap[char]){
        charMap[char]++

    } else {
        charMap[char] = 1
    }
}
 for (let char in charMap){
     if(charMap[char] > max){
         max = charMap[char]
         maxChar = char;
     }
 }
 return maxChar;
}
console.log(maxChar('yes'));