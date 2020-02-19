function fizzBuzz(n){
    for (let i = 1; i <= n; i++){
        //number either a multiple of 3 or 5
        if (i % 3 === 0 && i % 5 === 0){
            console.log('fizzbuzz')
        } else if (i % 3 === 0){
            //multiple of 3
            console.log('fizz')
        } else if (i % 5 === 0){
            //multiple of 5
            console.log('buzz')
        }else {
            console.log(i)
        }
    }
}
console.log(fizzBuzz(15))