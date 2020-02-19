//Palindrome a word or number that is the same when read 
//backward to forward
//examples =noon.madam,
 
//METHOD 1
function palindrome(str){
       const data = str.split('').reverse().join('')
       return str === data;
     }
   // console.log(palindrome('noon'));


   // METHOD 2
    function palindrome(str){
        return str.split('').every((char,i) => {
            return char === str[str.length - i -1]
        })
    }

    console.log(palindrome('noon2'))