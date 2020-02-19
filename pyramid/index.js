//Write a function that accepts a positive number N
//The function should console log a step shape
//With N levels using the # character.Make sure the pyramid has spaces on both the 
//left *and* right sides
//Examples 
//pyramid(3)
// ' # '
// ' ## '
// ' ### '


function pyramid (n){
    const midPoint = Math.floor((n * 2 - 1) / 2);

for (row = 0;row < n; row++){
    let level = ''; //start level with an empty string that you can add to

    for (col = 0; col < n * 2 - 1;col++){
        if (midPoint - row <= col && midPoint + row >= col){
            level += "#";
        }else {
            level += ' ';
        }
    }
    console.log(level);
}

}
pyramid(20);
