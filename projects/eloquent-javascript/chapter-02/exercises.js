
//1 - TRIANGLES SOLVED
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num){
  var hash = "";
  for (let i = 0; i <= num - 1; i++)
    {hash += "#"; console.log(hash)}
  }


////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for (let i = 1; i <= 15; i++){
    //exception 1 - if divisible by 3 (but not also by 5), print "Fizz" instead of number
    
    if (i %3 === 0 && i %5 !== 0) {console.log("Fizz")} 
    
    //exception 2 - if divisible by 5 (but not also by 3), print "Buzz" instead of number
    else if (i %5 === 0 && i %3 !== 0) {console.log("Buzz")}
    
    //exception 3 - if divisible by both 3 & 5, print "FizzBuzz" instead of number
    else if (i %3 ===0 && i %5 === 0) {console.log("FizzBuzz")}
    //otherwise, print the number
    else (console.log(i))}
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
    var board = ""
    var o = " "
    var x = "#"
    for (let height = 1; height <= num; height++) {
    for (let width = 1;  width <= num;  width++) {
    if (height === 1) {
      if (width %2 !== 0) {board += o}
    else {board += x}
    }
      else if (height %2 !== 0) {
    if (width === 1) {board += "\n"; board += o}
    else if (width %2 !== 0 && width > 1) {board += o}
    else {board += x} 
      }
    else {
      if (width === 1) {board += "\n"; board += x}
    else if (width %2 !== 0 && width > 1) {board += x}
    else {board += o}
    }
      
    }
    }
    return board;
    }


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
