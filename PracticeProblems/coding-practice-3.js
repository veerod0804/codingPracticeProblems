//First Reverse
// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. 
// For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.

function FirstReverse(str) { 
    let splitStr = str.split("");
    let reverseStr = splitStr.reverse();
    let joinStr = reverseStr.join("");
    str = joinStr;
    // code goes here  
    return str; 
    }

  // keep this function call here 
    // console.log(FirstReverse(readline()));
    console.log(FirstReverse("Hello!"));