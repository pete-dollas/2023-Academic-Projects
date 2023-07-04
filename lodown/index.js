'use strict';

// YOU KNOW WHAT TO DO //
//every function created in underpants needs to have documentation made for it
//below is  an example of documentation for a function called each

//STEP BY STEP DIRECTIONS
//1- copy the completed function from underpants

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}

_.identity = function(value) {
    return value;
}

//2. turn it into a declaration and delete all the rest
function identity(value){
    return value;
}

//3. use /** to start a code block, and then give a sentence or two to explain what this function does

 * identity: Designed to take in a value and return it unchanged
 *
//4. copy params and populate them based on the parameters

//5. the module export statement is module.exports.functionname = functionname
*/

//FINISHED EXAMPLE
/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * 
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;
*/


//1 
/**
 * identity: Designed to take in a value and return it unchanged.
 * 
 * @param {value} value: any value to be returned
 */
function identity(value){
    return value;
}
module.exports.identity = identity;

//2
/**
 * typeof: Designed to return the specific type of any value, including arrays and null.
 * 
 * @param {value} value: any value to be returned
 */
 function typeOf (value) {
    if (typeof value  === "string") {return "string"}
    else if (typeof value === "object" && value instanceof Array === true) {return "array"}
    else if (value === null) {return "null"}
    else if (typeof value  === "object") {return "object"}
    else if (typeof value  === "undefined") {return "undefined"}
    else if (typeof value  === "number") {return "number"}
    else if (typeof value  === "boolean") {return "boolean"}
    else if (typeof value  === "function") {return "function"}
 }
 module.exports.typeOf = typeOf

 //3
 /**
  * first: Designed to return the first n items in an array, else just the first element or empty array if invalid arguments are passed.
  * 
  * @param {array} array: an array to be passed; if no array is passed it will return []
  * @param {num} number: a positive number to be passed
  */
 function first (array, num) {
    let output = [];
        if (typeof array === "object" && array instanceof Array === true) {
            let number = num; 
            if (num < 0) {return []}
            if (num > array.length) {number = array.length}
            else if (num === "" || typeof num !== "number") {return array[0]}
            for (let i = 0; i < number; i++) {
                output.push(array[i])}
            return output;} 
        else {return []}
    }
    module.exports.first = first

//4 
/**
 * last: Designed to return the last n items in an array, else just the last element or empty array if invalid arguments are passed.
 * 
 * @param {array} array: an array to be passed; if no array is passed it will return []
 * @param {num} number: a positive number to be passed
 */
function last(array, number) {
    if (typeof array === "object" && array instanceof Array !== true) {
        return []
    }
    if (number === "" || typeof number !== "number") {
        return array[array.length - 1]
    }
    if (number < 0) {return []}
    if (number > array.length) {return array}
    let output = [];
    let counter = number
    while (counter > 0)  {
    for (let i = [array.length - 1]; i > 0; i--) {
        output.unshift(array[i]);
        counter --;
    }}
    return output;
}
module.exports.last = last

//5
/**
 * indexOf: Designed to return the index of <array> that is the first occurrance of <value>, else -1 if not found
 * 
 * @param {array} array: an array to be passed
 * @param {value} value: any value to be passed
 */
function indexOf(array, value){
    for (let i = 0; i < array.length; i++){
        if (array[i] === value) {return i}
    }
    return -1
}
module.exports.indexOf = indexOf

//6
/**
 * contains: Designed to return true if <array> contains <value>
 * 
 * @param {array} array: an array to be passed
 * @param {value} value: any value to be passed
 */
function contains(array, value){
    for (let i = 0; i < array.length; i++){
        if (array[i] === value) return true }
    
    return false;
}
module.exports.contains = contains

//7
/**
 * 
 */
