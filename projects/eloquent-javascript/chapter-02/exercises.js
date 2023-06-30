
//1 - TRIANGLES SOLVED
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num){
  var hash = "";
  for (let i = 0; i <= num - 1; i++)
    {hash += "#"; console.log(hash)}
  }

//2 SOLVED
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for (let i = 1; i <= 15; i++){
    //exception 1 - if divisible by 3 (but not also by 5), print "Fizz" instead of number
    
    if (i %3 === 0 && i %5 !== 0) {console.log("fizz")} 
    
    //exception 2 - if divisible by 5 (but not also by 3), print "Buzz" instead of number
    else if (i %5 === 0 && i %3 !== 0) {console.log("buzz")}
    
    //exception 3 - if divisible by both 3 & 5, print "FizzBuzz" instead of number
    else if (i %3 ===0 && i %5 === 0) {console.log("fizzbuzz")}
    //otherwise, print the number
    else (console.log(i))}
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num){
  var board = [];
  var o = " ";
  var x = "#";
  let odd = "";
  let even = "";
  
  
  for (let height = 0; height <= num; height++){ //height is key, value is an array
      //o = odd start
      //x = even start
    if (num === 0) {return ""}  
    else if (height === 1) {
      odd+= o
    }
    else if (height === 2) { 
      odd+= x;
      even+= x;
      even+= o;
    }
    else if (height %2 !== 0 && height >= 3) { //odd numbers 3+
      odd+= o
      even+= x
    }
    else if (height %2 === 0 && height >= 4) { //even numbers 4+ 
     odd+= x
     even+= o
    }
  }
    for(let j = 1; j <= num; j++){
    if (j %2 !== 0) {board.push(odd)}
    else if (j %2 === 0) {board.push(even)}
    }
    let almost = board.join('\n')
    return console.log(almost+= `\n`)
  }//chessboard end


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
