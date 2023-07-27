/**
 * VARIABLES
 * 
 * 0. DEFINITION & BACKGROUND
 *  Most of the time, a JavaScript application needs to work with information. To store and represent this information in the   JavaScript codebase, we use variables. A variable  is a container for a value.
 * 
 * 
 * 1: Declaration and assignment:
 * 
 *    To use variables in JavaScript, we first need to create it i.e., declare a variable. To declare variables, we use one of the    var, let, or const keywords. 
 * 
 *    Declaration: Variable is registered using a given name within the corresponding scope (e.g., inside a function).
 *      //declaration is just stating the variable;
        //var x;
        //let x;
        //const x;
 *
 *    Initialization: When you declare a variable it is automatically initialized, which means memory is allocated for the variable    by the JavaScript engine.
 * 
 *    Assignment: This is when a specific value is assigned to the variable.
 *      //assignment is when you actually give it a value.
        //x = 10;
        //x = "hi"
*      
        //you can also declare and assign all at once
*
        //var
        //var x = "hello"
*
        //let
        //let x = true
*
        //const
        //const y = 123
* 
*     Hard Rules for Naming:
*       •	Variables hardcoded cannot begin with a digit (and many symbols- clarify later). 
*       •	Variables hardcoded cannot contain spaces, but they can use underscores. If you use a space, JavaScript doesn't recognize it as a single variable.
*       •	Variables may start with $ sign – see below.
*       •	Variables are case sensitive.
*       •	Variables cannot be JS reserved keywords like “let”
*       •	Variables CAN start with an underscore but Prep discourages it- maybe it’s ok elsewhere.
*
*     A variable name should accurately identify your variable. When you create good variable names, your JavaScript code becomes easier to understand and easier to work with. 
*     Properly naming variables is really important. JavaScript also has some rules when it comes to naming variables.
*     JavaScript variables need to be given identifiers (unique names). 
 
*     Common Casing Conventions:

        *a.	camelCasing: every word's first letter is uppercased except for that of the first word. Camel casing is the casing used in JavaScript. Here are some identifier names from JavaScript: indexOf, getElementById, querySelectorAll.
        *b.	PascalCasing: every word's first character is uppercased. C# uses Pascal casing for almost all identifiers. Some examples from C# are as follows: WriteLine, ReadLine, GetType.
        *c.	snake_casing: every word is lowercased and separated from the other using the _ (underscore) character. PHP uses snake casing for most of its predefined functions. Some examples from PHP are as follows: array_push, mysqli_connect, str_split.
        *d.	SCREAMING_SNAKE_CASING: every word is uppercased and separated from the other using the _ (underscore) character. This casing is commonly used to denote constants in many programming languages, including JavaScript. Some examples are: MAX_VALUE, MAX_SAFE_INTEGER.


* 2: var, let, const
* 
*   VAR
*     The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.
* 
*   LET 
*     The let declaration declares a block-scoped local variable, optionally initializing it to a value.
* 
*   CONST
*     Constants are block-scoped, much like variables declared using the letkeyword. The value of a constant can’t be changed through reassignment (i.e., by using the assignment     operator), and it can’t be redeclared (i.e. through a variable declaration). However, if a constant is an object or array its properties or items can be updated or removed.
 *
 * Block-scoping with let and const allows you to declare variables that are limited in scope to a 
 * specific block of code (e.g., inside a loop, conditional statement, or function). 
 * This prevents variable pollution and unintended side effects. 
 * 
 * Here's an example to demonstrate block scoping:

function blockScopeExample() {
  if (true) {
    var x = 10; // Function-scoped variable (hoisted)
    let y = 20; // Block-scoped variable
    const z = 30; // Block-scoped constant

    console.log("Inside block:");
    console.log("x:", x); // Output: 10
    console.log("y:", y); // Output: 20
    console.log("z:", z); // Output: 30
  }

  // Outside the block, the 'let' and 'const' variables are not accessible
  console.log("Outside block:");
  console.log("x:", x); // Output: 10
  // The following two lines will throw ReferenceError as 'y' and 'z' are not accessible here.
  // console.log("y:", y);
  // console.log("z:", z);
}

blockScopeExample();
In this example, we have a function blockScopeExample() with an if block inside it. 
Within the if block, we use three variables: x declared with var (function-scoped), 
y declared with let (block-scoped variable), and z declared with const (block-scoped constant).

The variable x declared with var is function-scoped and is accessible both inside and outside the if block. 
However, the variables y and z declared with let and const, respectively, are block-scoped. 
They are only accessible within the if block and not outside of it.

When we run blockScopeExample(), you'll see the output:

Inside block:
x: 10
y: 20
z: 30
Outside block:
x: 10


We can access the x variable both inside and outside the block, but the y and z variables 
are only accessible inside the block. 
Trying to access y or z outside the block will result in a ReferenceError. 

 * 
 * 3: Hoisting
*   Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of     the code.
*  
*   Hoisting is often considered a feature of var declarations as well, although  in a different way.("Declaration hoisting") Being   able to reference a variable in its scope    before the line it is declared, without throwing a ReferenceError, but the value is    always undefined. 
* 
  //3 Hoisting EXAMPLES
    //var vs const vs let
    /* 
    console.log(hello);
    var hello = "Hi"; 
    //undefined
    */

    /*
    console.log(hello);
    let hello = "Hi";
    //ReferenceError: Cannot access 'hello' before initialization
    */
    
    /*
    console.log(hello);
    const hello = "Hi";
    //ReferenceError: Cannot access 'hello' before initialization
    */
    
    /*
    var hello = "Hi"; 
    console.log(hello);
    //Hi
    */
    
    //eg function followed by...
    //const = error
    
    //const
    //function == works