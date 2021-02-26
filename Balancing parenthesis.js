Given a string consists os left and right parenthesis

function getMin(s) {
    // Write your code here
   let parenthesis = [];
   for (let i = 0; i < s.length; i++) {
      if (s[i] === "(") {
         parenthesis.push(s[i]);
      } else if (s[i] === ")") {
         if (parenthesis[parenthesis.length - 1] === "("){
            parenthesis.pop();
         }else {
            parenthesis.push("#");
         };
      };
   }
   return parenthesis.length;
}
