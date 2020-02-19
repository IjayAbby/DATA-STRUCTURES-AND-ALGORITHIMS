//Reversing Numbers

function reverseInt (num){
    const reversed = num.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(num) //Math.sign returns the original number supposing
    //was a negative number
}
console.log(reverseInt(675));
