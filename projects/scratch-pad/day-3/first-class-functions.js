// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {//input of string or number
    // YOUR CODE BELOW HERE //
    
    return function(value){
        return (value > base)
    }
    //return function to test whether a given value is greater than base
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {//input a number or string
    // YOUR CODE BELOW HERE //
    return function(value){
        return (value < base)
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {//input a single character
    // YOUR CODE BELOW HERE //
    
    return function(str){
        return (str.slice(0,1).toLowerCase() == startsWith.toLowerCase())
    }
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {//endsWith parameter accepts a single string character
    // YOUR CODE BELOW HERE //   
    return function(str){//run a new function that accepts a string as an argument
        //compare last character of str to endsWith to see if they are the same letter
        return (str.slice(-1).toLowerCase() == endsWith.toLowerCase())//convert to lowercase so that comparison will work
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {//strings is an array of strings; modify is a function designed to return a modified version of a single string
    // YOUR CODE BELOW HERE //

    let output = [];//temporary array to hold output
    for (let i = 0; i <= strings.length - 1; i++) {//for loop to iterate through each indexed string in strings parameter
    output.push(modify(strings[i]))}//modify is run on array index of i, and this is pushed to the output array
    return output;//return the modified array of strings
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {//strings is an array of strings; test is a function designed to test a single string, to return true or false
    // YOUR CODE BELOW HERE //
    var output = 0;//counter to hold number of true boolean values in strings
    for (let i = 0; i <= strings.length - 1; i++) {//for loop to iterate through each indexed string in strings parameter
    if (test(strings[i])) {output+= 1}//each index item that passes the test as true adds 1 to output counter
    }
    if (output === strings.length) {return true}
    else {return false}
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
