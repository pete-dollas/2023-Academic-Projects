/**
 * DATA TYPES
 * 
 * 0. DEFINITION & BACKGROUND
Data types in JavaScript represent the type of values that can be stored and manipulated in a program. JavaScript is a dynamically-typed language, which means that variables can hold values of different data types throughout their lifetime. Understanding different data types is essential for working with variables and performing various operations in JavaScript.

1. NUMBER:
The number data type represents numeric values. It includes both integer and floating-point numbers. Numbers can be positive, negative, or zero. Here's an example:

var age = 25;
var price = 9.99;
In this example, age is an integer, and price is a floating-point number.

2. STRING:
The string data type represents sequences of characters enclosed in single or double quotes. Strings are used to store and manipulate textual data. Here's an example:

var name = "John Doe";
var message = 'Hello, world!';
In this example, name and message are strings that hold textual information.

3. BOOLEAN:
The boolean data type represents logical values. It can have one of two values: true or false. Booleans are often used in conditional statements and comparisons. Here's an example:

var isLogged = true;
var hasPermission = false;
In this example, isLogged and hasPermission are boolean variables representing logical conditions.

4. ARRAY:
The array data type is used to store multiple values in a single variable. Arrays can contain elements of different data types and are accessed using zero-based indexing. Here's an example:

var fruits = ["apple", "banana", "orange"];
var numbers = [1, 2, 3, 4, 5];
In this example, fruits and numbers are arrays that store multiple values.

5. OBJECT:
The object data type represents a collection of key-value pairs. Objects are used to store structured data and can hold properties and methods. Here's an example:

var person = {
  name: "John Doe",
  age: 25,
  city: "New York"
};
In this example, person is an object with properties like name, age, and city.

6. FUNCTION:
The function data type represents reusable blocks of code. Functions can be defined and invoked to perform specific tasks or calculations. Here's an example:

function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("John");
In this example, greet is a function that takes a name parameter and prints a greeting message.

7. UNDEFINED:
The undefined data type represents a variable that has been declared but has no value assigned to it. It is the default value of uninitialized variables. Here's an example:

var variable;
console.log(variable); // Output: undefined
In this example, variable is declared but not assigned a value, so it is undefined.

8. NULL:
The null data type represents the intentional absence of any object value. It is often used to indicate that a variable has no value or that an object does not exist. Here's an example:

var car = null;
In this example, car is assigned the value null, indicating the absence of an object.

9. NaN:
The NaN (Not-a-Number) value represents an invalid or unrepresentable numeric value. It is a special value of the number data type. Here's an example:

var result = 10 / "apple";
console.log(result); // Output: NaN
In this example, dividing a number by a non-numeric value results in NaN.

10. INFINITY & -INFINITY:
Infinity and -Infinity represent positive and negative infinity, respectively. They are special numeric values that exceed the upper and lower limits of JavaScript's number range. Here's an example:

var positiveInfinity = Infinity;
var negativeInfinity = -Infinity;
In this example, positiveInfinity represents positive infinity, and negativeInfinity represents negative infinity.

11. PRIMITIVE/SIMPLE VS COMPLEX:
JavaScript has two categories of data types: primitive (also called simple) and complex data types. Primitive data types are immutable, meaning their values cannot be changed once assigned. They include number, string, boolean, undefined, null, and NaN. Complex data types, such as object and array, can hold multiple values and are mutable.
Primitives passed to a function BY COPY and complex values are passed BY REFERENCE:
When passing primitive data types (like numbers or strings) to a function, a copy of the value is created and passed to the function. Any changes made within the function will not affect the original value. On the other hand, when passing complex data types (like objects or arrays), the reference to the value is passed, so changes made within the function will affect the original value.
COMPARE:

Primitive data types are single values, while complex data types can hold multiple values or have internal structure.
Primitive data types are immutable, while complex data types are mutable and can be modified.
CONTRAST:

Primitive data types include number, string, boolean, undefined, null, and NaN.
Complex data types include object and array.
Primitive data types are passed by copy to functions, while complex data types are passed by reference.
 */