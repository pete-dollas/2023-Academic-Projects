/**
 * CONTROL FLOW
 * 
 * 0. DEFINITION & BACKGROUND
 * JavaScript control flow refers to the order in which statements and instructions are executed in a JavaScript program. It determines how the program flows from one statement to another, based on conditions and control structures, allowing for decision-making and repetition. 
 * The control flow structures in JavaScript allow programmers to control the execution flow of their code based on conditions, iterate over data sets, and handle errors effectively. By utilizing these structures, developers can create more dynamic and flexible programs that perform different actions based on specific situations and data.
 * 
 * 1. IF
 * In JavaScript, the if statement is a conditional statement that allows you to execute a block of code if a specified condition is true. It provides a way to make decisions and control the flow of your program based on different conditions.
 * The basic syntax of the if statement is as follows:

if (condition) {
  // Code to be executed if the condition is true
}
Here's an example that demonstrates the usage of the if statement:

var age = 20;

if (age >= 18) {
  console.log("You are an adult.");
}
In this example, the if statement checks if the age variable is greater than or equal to 18. If the condition evaluates to true, the code within the curly braces will be executed. In this case, the console will output "You are an adult."

 * 2. ELSE-IF In JavaScript, the if...else statement is used to create a conditional structure that allows you to execute different blocks of code based on a specified condition. It provides an alternative code block to execute when the condition evaluates to false.
 * The basic syntax of the if...else statement is as follows:

if (condition) {
  // Code to be executed if the condition is true
} else {
  // Code to be executed if the condition is false
}
Here are some examples that demonstrate the usage of the if...else statement:

Example 1: Checking if a number is positive or negative

javascript
Copy code
var number = 5;

if (number > 0) {
  console.log("The number is positive.");
} else {
  console.log("The number is negative or zero.");
}
In this example, the if statement checks if the number variable is greater than zero. If the condition is true, it executes the code inside the first block, printing "The number is positive." If the condition is false, it executes the code inside the else block, printing "The number is negative or zero."

Example 2: Checking if a number is even or odd

var number = 10;

if (number % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}
In this example, the if statement uses the modulo operator (%) to check if the number variable is divisible by 2 with no remainder. If the condition is true, it executes the code inside the first block, printing "The number is even." If the condition is false, it executes the code inside the else block, printing "The number is odd."

Example 3: Checking if a person is eligible to vote

var age = 17;

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote yet.");
}
In this example, the if statement checks if the age variable is greater than or equal to 18. If the condition is true, it executes the code inside the first block, printing "You are eligible to vote." If the condition is false, it executes the code inside the else block, printing "You are not eligible to vote yet."

The if...else statement provides a way to handle alternative code paths based on a condition. It allows for more flexible control flow in your JavaScript programs, enabling different actions to be taken based on different situations.
 * 
 * 
 * 3. ELSE
 * In JavaScript, the if...else if...else statement is used when you have multiple conditions to check, and you want to execute different blocks of code based on those conditions. It allows you to create a series of conditions and corresponding code blocks, with an optional final else block to handle cases when none of the conditions are true.
 * The basic syntax of the if...else if...else statement is as follows:

if (condition1) {
  // Code to be executed if condition1 is true
} else if (condition2) {
  // Code to be executed if condition2 is true
} else {
  // Code to be executed if none of the conditions are true
}
Here are some examples that demonstrate the usage of the if...else if...else statement:

Example 1: Checking the grade of a student

var score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}
In this example, multiple conditions are checked using the if and else if statements. The code will evaluate each condition in order and execute the corresponding block of code for the first matching condition. If none of the conditions are true, the code inside the else block will be executed.

Example 2: Checking the time of day

var hour = 15;
var greeting;

if (hour < 12) {
  greeting = "Good morning!";
} else if (hour < 18) {
  greeting = "Good afternoon!";
} else {
  greeting = "Good evening!";
}

console.log(greeting);
In this example, the if...else if...else statement is used to determine the time of day based on the hour variable. The code will execute the first matching condition and assign the appropriate greeting to the greeting variable. The final value of greeting will be printed to the console.

The if...else if...else statement provides a way to handle multiple conditions and execute different blocks of code based on those conditions. It allows for more complex decision-making and control flow in your JavaScript programs, enabling you to handle various scenarios and provide different outcomes based on the specific conditions met.

 
 * 4. SWITCH
 * In JavaScript, the switch statement provides a way to perform different actions based on different cases. It allows you to evaluate an expression and execute a block of code based on the matching case. The switch statement is often used as an alternative to multiple if...else if...else statements when there are many possible cases to consider.

The basic syntax of the switch statement is as follows:

switch (expression) {
  case value1:
    // Code to be executed if expression matches value1
    break;
  case value2:
    // Code to be executed if expression matches value2
    break;
  case value3:
    // Code to be executed if expression matches value3
    break;
  default:
    // Code to be executed if none of the cases match
}
Here are some examples that demonstrate the usage of the switch statement:

Example 1: Checking the day of the week

var day = 3;
var dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName);
In this example, the switch statement evaluates the value of the day variable and executes the corresponding block of code based on the matching case. The dayName variable is assigned the name of the corresponding day of the week. The final value of dayName is printed to the console.

Example 2: Checking the type of a variable

var value = true;

switch (typeof value) {
  case "number":
    console.log("The value is a number.");
    break;
  case "string":
    console.log("The value is a string.");
    break;
  case "boolean":
    console.log("The value is a boolean.");
    break;
  default:
    console.log("The value is of an unknown type.");
}
In this example, the switch statement evaluates the result of the typeof operator on the value variable. Based on the type of value, different blocks of code will be executed. The corresponding message will be printed to the console.

The switch statement provides a concise way to handle multiple cases and execute different blocks of code based on those cases. It simplifies the code structure and enhances readability when dealing with a large number of possible cases.
 */