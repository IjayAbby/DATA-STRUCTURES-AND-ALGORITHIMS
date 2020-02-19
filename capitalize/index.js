
// let capitalized = 'a short sentence';

// function capitalize(str){
    
// let letters = str.charAt(0).toUpperCase() + str.slice(1)
// return letters;
  
// }
// console.log(capitalize('yellow color'))


function capitalize(str){
    const words = []
    for(let word of str.split(' ')){
        words.push(word[0].toUpperCase() + word.slice(1))
    }
    return words.join(' ')
}
console.log(capitalize('data structures is an interesting subject'))

function capitalize(str){
    const words = []
    for(let word of str.split(' ')){
        words.push
    }
    return words.join(' ')
}
console.log(capitalize('data structures is an interesting subject'))