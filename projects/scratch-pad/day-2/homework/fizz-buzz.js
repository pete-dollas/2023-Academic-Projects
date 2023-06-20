// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {//no input required
    // YOUR CODE GOES BELOW HERE //
//log numbers from 1 to 100
for (let i = 1; i <= 100; i++) {//use for loop to count 1 to 100
if (i %3 === 0 && i%5 === 0) {console.log("FizzBuzz")}
//if a multiple of 3 and 5, log "FizzBuzz" instead of number
else if (i %3 === 0) {console.log("Fizz")}//if a multiple of 3, log "Fizz" instead of number
else if (i %5 === 0) {console.log("Buzz")}//if a multiple of 5, log "Buzz" instead of number 
else {console.log(i)}//log all other numbers
}
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}