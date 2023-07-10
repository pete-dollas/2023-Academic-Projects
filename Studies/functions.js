/**
 * FUNCTIONS
 *
 * 0. DEFINITION & BACKGROUND
 * Functions are one of the fundamental building blocks in JavaScript. 
 * A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. 
 * To use a function, you must define it somewhere in the scope from which you wish to call it.
 * 
 * 1. TWO PHASES TO USING FUNCTIONS:
 * 
 * The two phases are creation and execution.
 * 
 * During the creation phase of the execution context, JS allocates memory space for the functions and variables. In case of functions, the whole function body is stored but in case of the variables, it is declared and assigned a default value undefined. This phenomena is called Hoisting.
 * 
 * In the execution phase, JS executes our code line by line and assigns the value to the variables. 

 *    EXAMPLE:
 *    // Creating a function: 
 *    
 *    function hiya() {
 *    console.log("Hello there!");
 *    }
 * 
 *    // Calling the function :
 *    hiya(); // => calling the function will cause the function itself to log 'Hello there!' to the console
 * 
 * 
 * 2. PARAMETER VS ARGUMENTS
 *  A parameter is a variable used as a placeholder within a function. 
 *  Arguments are the values within the function call itself- while they can be a variable representing a data type, they can also be any data type (for example, you could use the variable numArr or an actual array such as [8, 9, 10]). 
 *  When these arguments are passed through the function, they will be used in the places the parameter holds for them. 
 * 
 *  EXAMPLE:
 *    function exFunc(par1, par2) { // accepts 2 parameters
 *    return par1 + par2; // when the call occurs, the two arguements take the place of the place holder parameters
 *    }
 *  
 *  exFunc(3, 4); // a function call with two arguments 3 and 4.  
 *  Arguments can be variables or data types, and they are passed into the function.
 * 
 * 
 * 3. SYNTAX FOR A NAMED FUNCTION
 *  The syntax for a named function is a function keyword, followed by a name, followed by parentheses (), followed by curly braces {}. 
 * 
 *  The function can also contain parameters and a return.
 * 
 * SYNTAX without parameters or return:
 *  function name() {
    }
 * 
 * SYNTAX with 2 parameters and a return:
 *  function name(parameter1, parameter2) {
 *  return  
 *  }
 * 
 *  EXAMPLE OF A NAMED FUNCTION:
 *    function happy(reason) { //function name is happy, accepts a 1-word string parameter called reason
 *    return `I am happy because of ${reason}.`;
 *    }
 *    console.log(happy('sunny days')); // => calling the function with its name accesses it
 *    //output: "I am happy because of sunny days."
 * 
 * 
 * 
 * 4. ASSIGNING A FUNCTION TO A VARIABLE
 * 
 *  Functions can be assigned to variables just like a data type. 
 *  When a variable is created, it would be assigned the value of an function (can be anonymous or accept parameters). 
 *  Then, the function would be called by using the variable.
 * 
 *  EXAMPLE: 
 *    var joy = function (reason){
 *    return `I am joyous because of ${reason}.`;
 *    }
 *    console.log(joy('warm days')); // => calling the function with its name accesses it
 *    //output: "I am joyous because of warm days."
 * 
 * 5. SPECIFYING INPUTS AND OUTPUTS
 * In JavaScript, you can specify inputs and outputs in functions using parameters and the return statement, respectively. Parameters are variables that are defined within the function's parentheses and are used to receive values from the function's caller. The return statement is used to send a value back to the caller as the function's output.

EXAMPLE: 
This function calculates the square of a number and returns the result:

function calculateSquare(number) {
  var square = number * number;
  return square;
}

var result = calculateSquare(5);
console.log(result); // Output: 25

calculateSquare has one parameter number, which represents the input value. Inside the function, the square of number is calculated and stored in the square variable. Then, the return statement is used to send the square value back as the function's output.

When calling the function with calculateSquare(5), the value 5 is passed as the argument to the number parameter. The function performs the calculation and returns the square of 5, which is 25. This value is assigned to the result variable, and it is then printed to the console using console.log().

You can also have functions with multiple parameters and return multiple values. 

EXAMPLE: 

This function calculates the area and perimeter of a rectangle:

function calculateRectangleValues(length, width) {
  var area = length * width;
  var perimeter = 2 * (length + width);
  return [area, perimeter];
}

var values = calculateRectangleValues(4, 5);
console.log(values[0]); // Output: 20 (area)
console.log(values[1]); // Output: 18 (perimeter)


calculateRectangleValues function has two parameters: length and width. Inside the function, it calculates the area and perimeter of the rectangle using the given values. Instead of returning a single value, it returns an array [area, perimeter] containing both values.

When calling the function with calculateRectangleValues(4, 5), the length is 4 and the width is 5. The function calculates the area (20) and perimeter (18) and returns them as an array. The returned array is assigned to the values variable, and you can access the individual values using array indexing (values[0] for area and values[1] for perimeter).
 * 
 * 
 * 6. SCOPE
 * scope determines the visibility and accessibility of variables within a function. Variables declared inside a function are only accessible within that function (including any nested functions), and they are not visible outside of it. This concept is known as local scope. On the other hand, variables declared outside of any function have global scope, meaning they are accessible from anywhere within the JavaScript program.

Let's look at some examples to understand function scope better:

Example 1: Local Scope

function myFunction() {
  var name = 'John';
  console.log(name); // Output: John
}

myFunction();
console.log(name); // Output: ReferenceError: name is not defined
In this example, the variable name is declared inside the myFunction() function. It is only accessible within the function's body. When the function is called, it prints the value of name as 'John'. However, outside of the function, trying to access the name variable will result in a ReferenceError because it is not defined in the global scope.

Example 2: Global Scope

var age = 25;

function printAge() {
  console.log(age); // Output: 25
}

printAge();
console.log(age); // Output: 25
In this example, the variable age is declared outside of any function, making it a global variable. As a result, it is accessible from both the printAge() function and the global scope. The function printAge() can access the value of age and print it as '25'. Similarly, when age is accessed outside the function, it still retains the value '25'.

Example 3: Nested Scope

function outerFunction() {
  var outerVariable = 'Hello';

  function innerFunction() {
    var innerVariable = 'World';
    console.log(outerVariable + ' ' + innerVariable); // Output: Hello World
  }

  innerFunction();
}

outerFunction();
In this example, there is a nested function innerFunction() within the outerFunction(). Each function has its own scope. The innerFunction() can access variables from its own scope as well as variables from its parent scope (the outerFunction() scope). The console.log() statement inside innerFunction() can access both outerVariable and innerVariable. When the code is executed, it prints 'Hello World'.

It's important to note that variables with the same name in different scopes can coexist without interfering with each other. Each scope has its own separate copy of the variable. However, if a variable is not defined in the current scope, JavaScript will look for it in the parent scopes until it finds it or reaches the global scope.

Understanding function scope is crucial for writing modular and maintainable code. It helps prevent naming conflicts and allows for encapsulation and data hiding within functions.


 * 7. CLOSURES
 * In JavaScript, closures are a powerful concept that allows functions to retain access to variables from the parent scope even after the parent function has finished executing. A closure is created when a nested function references variables from its outer (enclosing) function. This allows the inner function to "remember" and access those variables, even if they would normally go out of scope.
 * 
 * Let's explore some examples to understand closures better:
 * 
 * Example 1: Basic Closure

function outerFunction() {
  var outerVariable = 'Hello';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

var closureFunc = outerFunction();
closureFunc(); // Output: Hello
In this example, the outerFunction defines an inner function called innerFunction. The innerFunction references the outerVariable, which is defined in its parent scope. The outerFunction returns the innerFunction itself. When outerFunction is called and assigned to closureFunc, it captures and retains the reference to outerVariable. Therefore, when closureFunc is called later, it can still access and print the value of outerVariable, resulting in the output "Hello".

Example 2: Maintaining State

javascript
Copy code
function counter() {
  var count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  return increment;
}

var counterFunc = counter();
counterFunc(); // Output: 1
counterFunc(); // Output: 2
counterFunc(); // Output: 3
In this example, the counter function creates a counter that keeps track of a value using a local variable count. The increment function increments count and logs its value. Each time counter is called and assigned to counterFunc, it creates a separate closure with its own count variable. When counterFunc is invoked multiple times, it retains and updates its own count value independently. Thus, each invocation of counterFunc logs the incremented count, resulting in the output "1", "2", "3".

Closures are powerful because they allow functions to maintain private data and encapsulate behavior. They can be useful for implementing data hiding and creating modular code structures. Additionally, closures are commonly used when working with asynchronous JavaScript, as they help preserve the context and variables within asynchronous callbacks.

It's important to note that closures can also lead to memory leaks if not used carefully. Since closures retain references to variables, the memory used by those variables will not be freed until the closure is released. Therefore, it's crucial to manage closures properly to avoid unnecessary memory consumption.
 * 
 */