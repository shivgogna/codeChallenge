/*
Description: For this challenge you will be 
reversing a string.
*/

//SOLUTION 1
function FirstReverse(str) { 
    return str.split('').reverse().join(''); 
}

//SOLUTION 2
function FirstReverse(str) { 
    let reverseWord;
    for(let i = str.length - 1; i >= 0; i--){
        reverseWord += str[i]
    }
    return reverseWord;
}