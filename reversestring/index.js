//reversing a string

// function reverse(str){
//     return str.split('').reverse().join('')
// }

// console.log(reverse('cathy'))

//METHOD 2
function reverse(str) {
    let reversed = ''
    for (let character of str){
        reversed = character + reversed
    }
    return reversed ;
}
console.log(reverse('ijay'));
// //character --> 'i','j','a','y'
// [CHAR] ==>   [REVERS]
// 'y'           ''
// 'a'           'y'
// 'j'           'a'
// 'i'           'j'
// ''            'i'

//METHOD 3

function reverse(str){
    return str.split('').reduce.((rev,char) => char + rev , '')
}
console.log(reverse('cathy'));

//[1,2,3].reduce((a,b) => a + b, 0)
//a = accumulator
//b =currentvalue
//a=0
//b = 1