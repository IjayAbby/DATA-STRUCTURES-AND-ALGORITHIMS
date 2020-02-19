// we have 3 variables a,b and result
//[0,1,1,2,3,5,8,13,21,34]
// var a = 0;
// var b = 0
// var result = b


function fib (n){
    const result = [0,1];
    for (let i = 2; i <= n; i++){
        const a = result[i - 1];
        const b = result [i - 2];
        result.push(a + b) //adds an element at the end of the array.
        
    }

    var data = result.map((data)=>{
        return data;
    })

    console.log(data);
}
console.log(fib("8"))

//fibonacci accepts strings
//fibonacci does not accept negatives.
//works with positive number
