/**
 * LOOPS
 * 
 * 0. DEFINITION & BACKGROUND
 *    A loop is a programming tool that is used to repeat a set of instructions. 
 *    Iterate is a generic term that means “to repeat” in the context of loops. 
 *    A loop will continue to iterate until a specified condition, commonly known as a stopping condition, is met.
 * 
 * 1. WHILE, FOR, FOR-IN LOOPS
 * 
 * ////WHILE LOOPS////
 * 
 *    While loops are like if statements and loops combined. They can do numbers like for loops.
 *    A while statement executes its statements as long as a specified condition evaluates to true. 
 *    A while statement looks as follows:
 *      while (condition){
 *      statement}
 * 
 *    If the condition becomes false, statement within the loop stops executing and control passes to the statement following the loop.
 *    The condition test occurs before statement in the loop is executed. If the condition returns true, statement is executed and the condition is tested again. If the condition returns false, execution stops, and control is passed to the statement following while.
 *    To execute multiple statements, use a block statement ({ }) to group those statements.
 * 
 *    //EXAMPLE
 *       The following while loop iterates as long as n is less than 3:
*        let n = 0;
*        let x = 0;
*        while (n < 3) {
*        n++;
*        x += n;
*        }
*        
*      With each iteration, the loop increments n and adds that value to x. Therefore, x and n take on the following values:
*      •	After the first pass: n = 1 and x = 1
*      •	After the second pass: n = 2 and x = 3
*      •	After the third pass: n = 3 and x = 6
*      • After completing the third pass, the condition n < 3 is no longer true, so the loop terminates.
*
 *    For loop vs While loop choice: 
 *    if I know exactly what numbers I want used and how many times I’ll run it, I’d do a for loop. While loops are used when it isn’t clear how many times or exactly what range of numbers will be needed. 
 * 
 * 
 * ////FOR LOOPS////
 *    A for loop repeats until a specified condition evaluates to false. 
 * 
 *    A for loop declares looping instructions, with three important pieces of information (expressions) separated by semicolons ;
 * 
 *    //SYNTAX MODEL
 *      for (expression 1; expression 2; expression 3) {
 *      // code block to be executed
 *      }
 *    
 *    //EXAMPLE
 *      for (let i = 0; i < 4; i += 1) {
 *      console.log(i);
 *      };
 * 
 *    Expression 1 is executed (one time) before the execution of the code block; the initialization defines where to begin the loop by declaring (or referencing) the iterator variable (usually i).
 *    Expression 2 defines the condition for executing the code block; it's a stopping condition that determines when to stop looping (when the expression evaluates to false).
 *    Expression 3 is executed (every time) after the code block has been executed; this iteration statement updates the iterator each time the loop is completed.
 * 
 * 
 * ///FOR-IN LOOPS
 * 
 * The for...in statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements. A for...in statement looks as follows:
*for (variable in object)
*  statement

* //Example
*The following function takes as its argument an object and the object's name. It then iterates over all the object's properties and returns a string that lists the property names and their values.
*function dumpProps(obj, objName) {
*  let result = "";
*  for (const i in obj) {
*    result += `${objName}.${i} = ${obj[i]}<br>`;
*  }
*  result += "<hr>";
*  return result;
*}
*For an object car with properties make and model, result would be:
*car.make = Ford
*car.model = Mustang
*Arrays
*Although it may be tempting to use this as a way to iterate over Array elements, the for...in statement will return the name of your user-defined properties in addition to the numeric indexes.
*Therefore, it is better to use a traditional for loop with a numeric index when iterating over arrays, because the for...in statement iterates over user-defined properties in addition to the array elements, if you modify the Array object (such as adding custom properties or methods).
*
 * 
 * 
 * 
 * 2. LOOPING X NUMBER OF TIMES, FORWARD COUNTING TO A LIMIT, BACKWARD COUNTING TO 0
 * 
 * //LOOPING X TIMES FORWARD
 * To loop FORWARD a specific number of times, make sure to coordinate the initialization and stopping condition. E.g. 0 vs 1 and  < vs <= , 
 * i++ to go up by one each time
 * 
 * //EXAMPLE COUNTING UP; USING < OR <=
 * //example assuming x = 9
 * i=0; i < 9; i++ would go from 0 to 8; it would run 9 times
 * i=0; i<= 9; i++ would be INCLUSIVE of 9, and go 0 - 9; it would run 10 times
 * i=1; i < 9; i++ would go from 1 to 8; it would run 8 times
 * i=1; i<= 9; i++ would be INCLUSIVE of 9, and go 1 - 9; it would run 9 times
 * 
 *  * //LOOPING X TIMES BACKWARD
 * To loop BACKWARD a specific number of times, make sure to coordinate the initialization and stopping condition. E.g. 0 vs 1 and  > vs >= , 
 * i-- each time
 * 
 * //EXAMPLE COUNTING BACK; USING > OR >=
 * //here, i is the larger number and our stopping condition will be the smaller number
 * //assume x = 9
 * i=9; i > 0; i-- would go from 9 to 1; it would run 9 times
 * i=9; i >= 0; i-- would be INCLUSIVE of 0, and go 9 to 0; it would run 10 times
 * i=9; i > 1; i-- would go from 9 to 2; it would run 8 times
 * i=9; i >= 1; i-- would be INCLUSIVE of 1, and go 9 to 1; it would run 9 times
 * 
 * 
 * 
 * 
 * 3. LOOP OVER AN ARRAY FORWARD AND BACKWARD
 * 
 * //EXAMPLE
 * let arr = ["a", "b", "c"];
 * 
 * //to loop forward
 * for (let i = 0; i < arr.length; i++){//start at index 0; do not hard code the end, run all the way to the end of it, go up by 1 index after each loop
   console.log(arr[i]);//in this case , the action I chose to take was a simple console log for each value
 }
 *  * //to loop backward
 * for (let i = arr.length - 1; i >= 0; i--){//start at highest index spot; end when it is at index position 0; go down 1 index position each time
   console.log(arr[i]);//in this case , the action I chose to take was a simple console log for each value
 }
 
 * 4. LOOP OVER AN OBJECT
 * 
 * 
 * //EXAMPLE
 * var data = {
   name: "Pete",
   sign: "Libra",
   hobbies: ["reading", "making lists", "coding"]
 }
 
 for (let key in data) {
   console.log(key + ": " + data[key])//this will show each key and its values, with ": " neatly separating in between each
 }
 * 
 * 
 */