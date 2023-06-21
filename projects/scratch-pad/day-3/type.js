// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {//input is any value
    // YOUR CODE BELOW HERE //
 return Array.isArray(value)////return boolean based on isArray results on input
 

    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {//input any value
    // YOUR CODE BELOW HERE //
    if (value instanceof Object === true//is an object
        && value !== null//is not null
        && value instanceof Array === false//is not an array
        && value instanceof Date === false)//is not a Date
        {return true}
        else {return false}
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {//input a value
    // YOUR CODE BELOW HERE //
    if (value instanceof Object === true//is an object
        && value instanceof Array === true//and is an array
        && value !== null//cannot be null
        && value instanceof Date === false)//cannot be a Date
        {return true}
        else if (value instanceof Object === true//is an object
        && value instanceof Array === false//and is NOT an array
        && value !== null//cannot be null
        && value instanceof Date === false)//cannot be a Date
        {return true}
        else {return false}
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {//input any value
    // YOUR CODE BELOW HERE //
    if (value === null) {return "null"} //log as string
    else if (value instanceof Object === true) {////if value is an object, use else if to determine what kind
        if (value instanceof Array === true) {return "array"}//log as string
        else if (value instanceof Date === true) {return "date"}//log as a string
        else if (value instanceof Function === true) {return "function"}
        else {return "object"}
    }
    else {return typeof(value)}
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
