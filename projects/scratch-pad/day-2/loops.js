// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {//input an array
  // YOUR CODE BELOW HERE //
  //loop over an array
  for (let i = 0; i <= array.length - 1; i++) {
  //console log the array values
  console.log(array[i]);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {//input an array
  // YOUR CODE BELOW HERE //
  for (let i = array.length - 1; i >= 0; i--) { //loop backwards over array
  console.log(array[i])//console log the array values
}
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {//input an Object
  // YOUR CODE BELOW HERE //
  let newArr = [];//create an array to contain the values to be returned
  for (let key in object) {//loop over the object keys
    newArr.push(key)//push the keys to the array
  }
  return newArr;//return an array of object's keys
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {//input an object
  // YOUR CODE BELOW HERE //
 
  for (let key in object) {//loop over the Object
    console.log(key);//print the keys using console.log
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {//input an object
  // YOUR CODE BELOW HERE //
  let newArr = []; //create an array to contain object values
  for (let key in object){//loop over the keys in object
  newArr.push(object[key]);//push values to array
  }
  return newArr;//return an array containing object values
  
  // YOUR CODE ABOVE HERE //
  }

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {//input an object
  // YOUR CODE BELOW HERE //
  for (let key in object){//loop over the object keys; will access corresponding values
  console.log(object[key])//print object values using console.log
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {//input an object
  // YOUR CODE BELOW HERE //
  let counter = 0; //create a counter to log the number of k/v pairs
  for (let key in object) {//loop through each key
    counter++//increase counter by 1 for each looped k/v in the object
  }
  return counter;//return the number of key/value pairs stores within the object
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {//input an object
  // YOUR CODE BELOW HERE //
let newArr = [];//create a temporary array to hold the object values
  for (let key in object) {//loop over the object keys; will use these to access their values
newArr.unshift(object[key])////each value will be unshifted to newArr in reverse order of appearance
  }
  for (let i = 0; i <= newArr.length - 1; i++){//create a for loop to iterate over newArr values
console.log(newArr[i])//print the values in using console.log; they will print in "reverse order" format as specified
  }
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
