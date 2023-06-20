// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {//string input
    // YOUR CODE BELOW HERE //
    //return length of the string input
return string.length;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {//input a string
    // YOUR CODE BELOW HERE //

//return new string forced to lowercase
return string.toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {//input a string
    // YOUR CODE BELOW HERE //
//return new string forced to uppercase
return string.toUpperCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {//input a string
    // YOUR CODE BELOW HERE //
//return new string forced to dash case- must be all lowercase as well
//split string --> join with hyphens --> to lowercase
return string.split(" ").join("-").toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {//input a string and a single character
    // YOUR CODE BELOW HERE //
//function is case insensitive. Force string and char to lowercase in order to uniformly apply conditional statement
//if string begins with char, return true
if (string.toLowerCase().startsWith(char.toLowerCase())) {return true}
else {return false} //else, return false
    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {//input a string and a single character
    // YOUR CODE BELOW HERE //
//function is case insensitive. Force string and char to lowercase in order to uniformly apply conditional statement
//if string ends with char, return true
if (string.toLowerCase().endsWith(char.toLowerCase())) {return true}
else {return false}//else return false


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {//input two string parameters
    // YOUR CODE BELOW HERE //

return stringOne.concat(stringTwo);
//return both strings concatenated into one
    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {//input any number of strings
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);//array created to collect all inputted strings
return args.join("") //return all strings joined together without spaces
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {//input two strings
    // YOUR CODE BELOW HERE //
    //compare the two strings and return the longer string
return stringOne.length > stringTwo.length ? stringOne : stringTwo;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {//input 2 strings
    // YOUR CODE BELOW HERE //
//compare both strings using greater or less;  
if (stringOne < stringTwo) {return 1} //if stringOne is higher alphabet (greater), return 1
else if (stringOne > stringTwo) {return -1} //else if stringTwo is higher alphabet, return -1
else {return 0} //else return 0 if they're equal


    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {//input 2 strings
    // YOUR CODE BELOW HERE //
    if (stringOne > stringTwo) {return 1} //if stringOne is lower alphabet (lesser), return 1
    else if (stringOne < stringTwo) {return -1} //else if stringTwo is lower alphabet, return -1
    else {return 0} //else return 0 if they're equal



    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
