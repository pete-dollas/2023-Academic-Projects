// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//“Flattening
//Use the reduce method in combination with the concat method to “flatten” an 
//array of arrays into a single array 
//that has all the elements of the original arrays.”

function flatten(array) {
let flat = array.reduce(function(current, next) {
return current.concat(next);
})
return flat;
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
DIRECTIONS
//“Write a higher-order function loop that provides something like a for loop statement.
// It takes a value, a test function, an update function, and a body function. Each iteration, 
//it first runs the test function on the current loop value and stops if that returns false. Then 
//it calls the body function, giving it the current value. Finally, it calls the update function to 
//create a new value and starts from the beginning.
//When defining the function, you can use a regular loop to do the actual looping.”
/*
Write a higher-order function called loop that mimics a for loop statement for iterating over an array. 
The loop function takes four arguments: value (the array to be iterated), test (a function that tests each element 
  in the array), update (a function that updates the value for the next iteration), and 
  body (a function that operates on the current element during each iteration).

During each iteration, the loop function runs the test function on the current element of the array. 
If the test function returns false, the loop stops. Otherwise, the body function is called, passing the 
current element as an argument. After the body function completes, the update function is called to create a new 
value for the next iteration.

Please note that the current solution provided is incomplete, and you need to implement the missing parts to 
make the loop function fully functional. Additionally, ensure that the test, update, and body functions are 
implemented correctly to avoid the TypeError issues observed in the test cases.
*/
function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}


// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//“Analogous to the some method, arrays also have an every method. This one returns true 
//when the given function returns true for every element in the array. In a way, some is a 
//version of the || operator that acts on arrays, and every is like the && operator.
////Implement every as a function that takes an array and a predicate function as parameters. 
//Write two versions, one using a loop and one using the some method.”


function every(array, func) {
  for (let i = 0; i < array.length; i++){
    if (func(array[i]) !== true) {return false}
  }
  return true;
  }
// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
//“Write a function that computes the dominant writing direction in a string of text. Remember 
//that each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), 
//or "ttb" (top to bottom).
//The dominant direction is the direction of a majority of the characters that have a script 
//associated with them. The characterScript and countBy functions defined earlier in the chapter 
//are probably useful here.”


function dominantDirection(text) {

}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
