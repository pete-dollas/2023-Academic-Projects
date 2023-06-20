// #!/usr/bin/env node

'use strict';

/** 
 * IN CLASS EXERCISE: Greeter App
 *
 * Using if, else-if and else, AND depending on the hour of the day, 
 * write a greeting program that prints a greeting to the screen like so: 
 *
 * // hour is 0-11
 * Good Morning!
 *
 * // hour is 12-16
 * Good Afternoon! 
 *
 * // hour is 17-21
 * Good Evening!
 *
 * // hour is 22-24 
 * Good Night!
 *
 * TIPS: 
 * 
 *   a. At what threshold does morning become afternoon? What comparison 
 *      can be used to test that the hour is within the morning threshold. 
 *      It's best to be consistant and use the SAME type of comparison for 
 *      each threshold. 
 *   
 *   b. Does the last threshold even need an else-if?
 * 
 *   c. The tests are CASE sensitive, so you MUST console.log('Good Night!') with
 *      the exact case.
 */

function greeter(hour) {//input a number 0 - 24
    // YOUR CODE BELOW HERE //
    if (hour < 0 || hour > 24) {return console.log("Please enter a valid time")}//edge case for invalid input
    else if (hour >= 0 && hour <= 11) {return console.log("Good Morning!")}//log for inclusive 0 to 11
    else if (hour > 11  && hour <= 16) {return console.log("Good Afternoon!")}//log for anything over 11, up to inclusive 16
    else if (hour > 16 && hour <= 21) {return console.log("Good Evening!")}//log for anything over 16, up to inclusive 21
    else if (hour > 21&& hour <= 24) {return console.log("Good Night!")}//log for anything over 21, up to inclusive 24
    // YOUR CODE ABOVE HERE //
}

/*
 * To test our greeter when developing, we need to fake some input data, ie, 
 * the hour, so just change the input value to check your work.
 * 
 * In a more realistic setting, you might do something like this to get the 
 * actual system hour:
 *
 * var today = new Date();
 * var hour = today.getHours();
 */

greeter(11);



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.greeter = greeter;
}