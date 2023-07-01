////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//“Write a function min that takes two arguments and returns their minimum.”

function min(num1, num2) {
  return Math.min(num1, num2);
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//RECURSION: “Here’s another way to define whether a positive whole number is even or odd:
/*
Zero is even.
One is odd.
For any other number N, its evenness is the same as N –2.

Define a recursive function isEven corresponding to this description. 
The function should accept a single parameter (a positive, whole number) and return a Boolean.
Test it on 50 and 75. See how it behaves on –1. Why? Can you think of a way to fix this?”
*/

function isEven(N) {//accepts a single positive, whole number
  if (N < 0) {return isEven(N *= -1)} //if num is negative, multiply by -1 to make it positive
  else if (N === 0) {return true}
  else if (N === 1) {return false}
  return isEven(N - 2);
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//“Write a function countBs that takes a string as its only argument and returns a number that 
//indicates how many uppercase “B” characters there are in the string.

//Next, write a function called countChar that behaves like countBs, 
//except it takes a second argument that indicates the character that is to be counted 
//(rather than counting only uppercase “B” characters). 

//Rewrite countBs to make use of this new function.”


function countChars(str, character) {//accepts a string and the character to be counted
  let output = 0; //this will be a counter for number of matched characters
  let strSplit = str.split("") //to be parsed for matches
  for (let i = 0; i < strSplit.length; i++) {//will iterate through each value in the split array
    if (strSplit[i] === character) {output++}
  }
  return output;//how many of character are in the string
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//WOULD IT BE COUNTBS(COUNTCHARS) HOW DO I CALL THESE?
function countBs(str) {//accepts a string
return countChars(str, "B") //how many uppercase B are in the string
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
