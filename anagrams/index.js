//an anagram are two different words with the same letters
//Example SILENT $$ LISTEN

// let anagm = function(str1,str2){
//     let sorted1 = str1.replace(/[^w]/)            str1.split('').sort().join('').toLowerCase('')
//     let sorted2 = str2.split('').sort().join('').toLowerCase('')
//     return sorted1 === sorted2;
// }

// console.log(anagm('rail safety','FAIRY TALES!'));

// function anagrams(stringA,stringB){
//     return cleanString(stringA) === cleanString(stringB)
// }
// function cleanString(str){
//     return str.replace(/[^w]/g,'').toLowerCase().split('').sort().join('')
// }
// console.log(anagrams('RAIL! SAFETY!','fairy tales')) 
function anagrams(stringA,stringB){
const aCharMap = buildCharMap(stringA);
const bCharMap = buildCharMap(stringB);


if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false ;
}
for (let char in aCharMap){
    if (aCharMap[char] !== bCharMap[char])
    return false;
}
return true ;
}


function buildCharMap(str){
    const charMap = {};
    for (let char of str.replace(/[^w]/g,'').toLowerCase()){
        charMap[char] = charMap[char] + 1 || 1
    }
    return charMap
}


console.log(anagrams('RAIL! SAFETY!','fairy tales')) 