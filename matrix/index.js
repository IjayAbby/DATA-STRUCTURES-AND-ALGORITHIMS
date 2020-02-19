//Write a function that accepts an integer N
//and returns a NxN spiral matrix
//Examples
//Matrix(2)
//[1,2],
//[3,4]

function matrix(n){
    const results = [];
    for (let i = 0; i < n ;i++){
        results.push([])
    }
    
   let counter = 1;
   let startRow = 0;
   let endRow = n - 1;
   let startColumn = 0;
   let endColumn = n - 1;


   while (startColumn <= endColumn && startRow <= endRow){
       //TOP ROW
       for (let i = startColumn; i <= endColumn; i++){
           results [startRow][i] = counter;
           counter++;
          //results[0][0] =12
          //results[0][1] =13
          //results[0][2] =14


       }
       startRow++;
     //results[0][0] =1
     //results[0][1] =2
     //results[0][2] =3
     //results[0][3] =4



    
   //RIGHT COLUMN
   for (let i = startRow; i <= endRow; i++){
       results[i][endColumn] = counter;
       counter++
   }
   endColumn--;
     //results[1][3] = 5
     //results[2][3] = 6
     //results[3][3] = 7
     
 


   //BOTTOM ROW 
   for (let i = endColumn; i >=startColumn; i--){
       results[endRow][i] = counter;
       counter++;
   } 
   endRow--;

     //results[3][2] = 8
     //results[3][1] = 9
     //results[3][0] = 10
    

   //START COLUMN
   for (let i = endRow; i >=startRow; i--){
       results[i][startColumn] = counter;
       counter++;
   }
   startColumn++
   //results [2][0] = 11
   //results [1][0] = 12

    //results [0][2] = 15
    //results [0][3] = 16
    



   }

return results;
}
console.log(matrix(4))