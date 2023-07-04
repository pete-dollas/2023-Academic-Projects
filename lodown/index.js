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


//1 SOLVED
/**
 * identity: Designed to take in a value and return it unchanged.
 * 
 * @param {value} value: any value to be returned
 */
function identity(value){
    return value;
}
module.exports.identity = identity;

//2 SOLVED
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
 module.exports.typeOf = typeOf;

 //3 SOLVED
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
    module.exports.first = first;

//4 SOLVED
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
module.exports.last = last;

//5 SOLVED
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
module.exports.indexOf = indexOf;

//6 SOLVED
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
module.exports.contains = contains;

//7 SOLVED
/**
 * each: Designed to call a function once for each element if using an array, or property if using an object.
 * 
 * @param {collection} collection: a collection to be passed; can be an array or an object
 * @param {funct} function: a function to be passed
 */
function each(collection, func){
    if (collection instanceof Array === true) {
        for (let i = 0; i < collection.length; i++) {
            funct(collection[i], i, collection)
        }
    }
    else if (typeof collection === "object") {
        for (let entry in collection) {
            funct(collection[entry], entry, collection)
        }
    }
}
module.exports.each = each

//8 SOLVED
/**
 * unique: Designed to return a new array of all elements from input array with duplicates removed
 * * @param {array} array: an array to be passed
 */
function each(array){
    let output = [];
    for (let i = 0; i < array.length; i++){
        if (_.indexOf(output, array[i]) === -1) {
            output.push(array[i])
        }
    }
    return output;
}
module.exports.unique = unique;

//9 SOLVED
/**
 * filter: Designed to apply a function to an array and return all true values
 * @param {array} array: an array to be passed
 * @param {funct} function: a function to be passed
 */
function filter(array, func){
    let output = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === true) {
            output.push(array[i])
        }
    }
    return output;
    }
module.exports.filter = filter

//10 SOLVED
/**
 * reject: Designed to apply a function to an array and return all false values
 * @param {array} array: an array to be passed
 * @param {funct} function: a function to be passed
 */
function reject(array, func){
    let output = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === false) {
            output.push(array[i])
        }
    }
    return output;
}
module.exports.reject = reject

//11
/**
 * partition: Designed to call a function on an array and return truthy values and falsy values
 * @param {array} array: an array to be passed
 * @param {funct} function: a function to be passed
 */
function partition(array, func){
    let output = [[], []];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array) == true) {
            output[0].push(array[i])
        }
        if (func(array[i], i, array) == false) {
            output[1].push(array[i])
        }
    }
    return output;
}
module.exports.partition = partition

//12
/**
 * map
 * 
 */

//13
/**
 * pluck
 */

//14
/**
 * every
 * 
 */

//15
/**
 * some
 * 
 */

//16
/**
 * reduce
 * 
 */

//17
/**
 * extend: 
 * @param {obj1} obj1: an object to be passed
 * @param {obj2} obj2: an additional object to be passed
 */