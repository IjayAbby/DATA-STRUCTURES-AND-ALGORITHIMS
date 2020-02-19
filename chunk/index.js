// function chunk(array,size){
//     let arr = [];
//     var arr2 = array;
//     let arrSize = arrSize.split(size)
// }
// console.log(chunk[1,2,3,4],2);

// function chunk(array,size){
//     const chunked = []
// let index = 0;

// while (index<array.length) {
//     chunked.push(array.slice(index,index + size))
//     index += size
// }
// return chunked;
// }
// console.log(chunk([1,2,3,4],2))

//Alternatively 


function chunk(array,size){
    const chunked = [];
    for (let element of array){
        const last = chunked[chunked.length - 1];
        if (!last|| last.length === size){
            chunked.push([element])
        }else {
                last.push(element)
        }
    }
    return chunked;
}
console.log(chunk([1,2,3,4,5,6,7,8],2));