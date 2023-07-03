'use strict';

// YOU KNOW WHAT TO DO //
//every function created in underpants needs to have documentation made for it
//below is  an example of documentation for a function called each


/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
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

//STEP BY STEP DIRECTIONS
//1- copy it 

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value) {
    return value;
}


//2. turn it into a declaration and delete all the rest
function identity(value){
    return value;
}

//3. use /** to start a code block, and then give a sentence or two to explain what this function does

/**
 * identity: Designed to take in a value and return it unchanged
 */
//4. copy params and populate them based on the parameters

//5. the module export statement is module.exports.functionname = functionname