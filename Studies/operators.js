/**
 * OPERATORS
 * 
 *
 *  0. DEFINITION & BACKGROUND
 *
 *  EXPRESSIONS- an expression is a valid unit of code that resolves to a value. 
 *  There are two types of expressions: 
 *    - those that have side effects (such as assigning values).
 *        EXAMPLE: x = 7
 *    - those that purely evaluate.
 *        EXAMPLE: 3 + 4
 * 
 *  OPERATORS- these are the things that join expressions together, such as = or +
 * 
 *  1. ASSIGNMENT OPERATORS
 *    An assignment operator assigns a value to its left operand based on the value of its right operand. 
 *    The simple assignment operator is equal (=), which assigns the value of its right operand to its left operand. 
 *    That is, x = f() is an assignment expression that assigns the value of f() to x.
 *   
 *  There are also compound assignment operators that are shorthand for the operations listed in the following format:
 *
 * //Name
 * //Shorthand Operator
 * //Meaning
 * 
 * Assignment	
 * x = f()	
 * x = f()
 * 
 * Addition assignment	
 * x += f()	
 * x = x + f()
 * 
 * Subtraction assignment	
 * x -= f()	
 * x = x - f()
 * 
 * Multiplication assignment	
 * x *= f()	
 * x = x * f()
 * 
 * Division assignment	
 * x /= f()	
 * x = x / f()
 * 
 * Remainder assignment	
 * x %= f()	
 * x = x % f()
 * 
 * Exponentiation assignment	
 * x **= f()	
 * x = x ** f()
 * 
 * Left shift assignment	
 * x <<= f()	
 * x = x << f()
 * 
 * Right shift assignment	
 * x >>= f()	
 * x = x >> f()
 * 
 * Unsigned right shift assignment	
 * x >>>= f()	
 * x = x >>> f()
 * 
 * Bitwise AND assignment	
 * x &= f()	
 * x = x & f()
 * 
 * Bitwise XOR assignment	
 * x ^= f()	
 * x = x ^ f()
 * 
 * Bitwise OR assignment	
 * x |= f()	
 * x = x | f()
 * 
 * Logical AND assignment	
 * x &&= f()	
 * x && (x = f())
 * 
 * Logical OR assignment	
 * x ||= f()	
 * x || (x = f())
 * 
 * Nullish coalescing assignment	
 * x ??= f()	
 * x ?? (x = f())
 * 
 * 
 * 
 * 
 *  2. ARITHMETIC OPERATORS
 * An arithmetic operator takes numerical values (either literals or variables) as their operands and returns a single numerical value. 
 * The standard arithmetic operators are addition (+), subtraction (-), multiplication (*), and division (/). 
 * These operators work as they do in most other programming languages when used with floating point numbers (in particular, note that division by zero produces Infinity). 

 *  BASIC ARTIHMETIC OPERATORS
 *  +	Addition	
 * const num1 = 10;
const num2 = 5;
const result = num1 + num2;
console.log("Addition:", result); // Output: 15

 *  -	Subtraction	 
const num1 = 10;
const num2 = 5;
const result = num1 - num2;
console.log("Subtraction:", result); // Output: 5

 *  *	Multiplication	 
const num1 = 10;
const num2 = 5;
const result = num1 * num2;
console.log("Multiplication:", result); // Output: 50

 *  /	Division	
const num1 = 10;
const num2 = 5;
const result = num1 / num2;
console.log("Division:", result); // Output: 2

Remainder (Modulo) (%)
const num1 = 10;
const num2 = 3;
const result = num1 % num2;
console.log("Remainder:", result); // Output: 1
 * 
 *  NOTEWORTHY OPERATORS
 *  ++	Increment	up by 1 - this is a unary operator
 * let num = 5;
num++;
console.log("Increment:", num); // Output: 6

 *  --	Decrement	down by 1 - this is a unary operator
let num = 5;
num--;
console.log("Decrement:", num); // Output: 4

 *  +=	Add this much	 
 *  -=	Subtract this much	x+=3 is add 3 to x, or 4+=5 is 9
 *  *=	Multiply by this much	 
 *  /=	Divide by this much	 
 * 
 *  **  Exponent
 *        EXAMPLE:
 *        2**3 = 8 (2 cubed)
 *  e 	Exponent - scientific notation 
 *      Where e is 10, followed by exponent	
 *        EXAMPLE:
 *        2e3 = 2000 (2 * 10 to the 3rd)
 *  %	  Remainder/Modulus (What the remainder is)	: This is a binary operator.
 *        EXAMPLE: 
 *        9 % 2 = 1 (9 divided by 2 is 8R1)
 * 
 *  UNARY NEGATION 
 *  -  when used in this manner, it is a unary operator. Returns the negation of its operand.
 *      EXAMPLE: 
 *      If x is 3, then -x returns -3
 * 
 *  UNARY PLUS
 *  -   when used in this manner, it is a unary operator. Attempts to convert the operand to a number, if it is not already.
 *        EXAMPLE: 
 *        +"3" returns 3.
 *        +true returns 1.
 * 
 * 
 * 
 * 
 *  3. COMPARISON OPERATORS
 *  A comparison operator compares its operands and returns a logical value based on whether the comparison is true. 
 *  The operands can be numerical, string, logical, or object values. Strings are compared based on standard lexicographical ordering, using Unicode values. 
 *  In most cases, if the two operands are not of the same type, JavaScript attempts to convert them to an appropriate type for the comparison. 
 *  This behavior generally results in comparing the operands numerically. 
 *  The sole exceptions to type conversion within comparisons involve the === and !== operators, which perform strict equality and inequality comparisons. 
 *  These operators do not attempt to convert the operands to compatible types before checking equality.
 * 
 * 
 *  These are comparison operators, listed in the following format:
 * 
 * //Operator	
 * //Description	
 * //Examples returning true
 * 
 * Equal (==)	
 * Returns true if the operands are equal.	
 * 3 == var1
 * "3" == var1
 * 3 == '3'
 * 
 * Not equal (!=)	
 * Returns true if the operands are not equal.	
 * var1 != 4
 * var2 != "3"
 * 
 * Strict equal (===)	
 * Returns true if the operands are equal and of the same type. See also Object.is and sameness in JS.	
 * 3 === var1
 * 
 * Strict not equal (!==)	
 * Returns true if the operands are of the same type but not equal, or are of different type.	
 * var1 !== "3"
 * 3 !== '3'
 * 
 * Greater than (>)	
 * Returns true if the left operand is greater than the right operand.	
 * var2 > var1
 * "12" > 2
 * 
 * Greater than or equal (>=)	
 * Returns true if the left operand is greater than or equal to the right operand.	
 * var2 >= var1
 * var1 >= 3
 * 
 * Less than (<)	
 * Returns true if the left operand is less than the right operand.	
 * var1 < var2
 * "2" < 12
 * 
 * Less than or equal (<=)	
 * Returns true if the left operand is less than or equal to the right operand.	
 * var1 <= var2
 * var2 <= 5
 * 
 * 
 * 
 *  4. LOGICAL OPERATORS
 *  Logical operators are typically used with Boolean (logical) values; when they are, they return a Boolean value. 
 *  However, the && and || operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they may return a non-Boolean value. 
 * 
 * Logical AND (&&)	expr1 && expr2	
 * Returns expr1 if it can be converted to false; otherwise, returns expr2. 
 * Thus, when used with Boolean values, && returns true if both operands are true; otherwise, returns false.
 * 
 * Logical OR (||)	expr1 || expr2	
 * Returns expr1 if it can be converted to true; otherwise, returns expr2. 
 * Thus, when used with Boolean values, || returns true if either operand is true; if both are false, returns false.
 * 
 * Logical NOT (!)	!expr	
 * Returns false if its single operand that can be converted to true; otherwise, returns true.
 * 
 * 
 * Examples of expressions that can be converted to false are those that evaluate to null, 0, NaN, the empty string (""), or undefined.
*/


/*
The following code shows examples of the && (logical AND) operator.
const a1 = true && true; // t && t returns true
const a2 = true && false; // t && f returns false
const a3 = false && true; // f && t returns false
const a4 = false && 3 === 4; // f && f returns false
const a5 = "Cat" && "Dog"; // t && t returns Dog
const a6 = false && "Cat"; // f && t returns false
const a7 = "Cat" && false; // t && f returns false
*/

/*
The following code shows examples of the || (logical OR) operator.
const o1 = true || true; // t || t returns true
const o2 = false || true; // f || t returns true
const o3 = true || false; // t || f returns true
const o4 = false || 3 === 4; // f || f returns false
const o5 = "Cat" || "Dog"; // t || t returns Cat
const o6 = false || "Cat"; // f || t returns Cat
const o7 = "Cat" || false; // t || f returns Cat
*/

/*
The following code shows examples of the ! (logical NOT) operator.
const n1 = !true; // !t returns false
const n2 = !false; // !f returns true
const n3 = !"Cat"; // !t returns false
*/


/**
 *  5. UNARY OPERATORS
 * 
 * A unary operation is an operation with only one operand.
 *
 * delete
 * The delete operator deletes an object's property. The syntax is:

 * delete object.property;
 * delete object[propertyKey];
 * delete objectName[index];
 * where object is the name of an object, property is an existing property, and propertyKey is a string or symbol referring to an existing property.
 * 
 * If the delete operator succeeds, it removes the property from the object. Trying to access it afterwards will yield undefined. The delete operator returns true if the operation is possible; it returns false if the operation is not possible.
 * 
 * delete Math.PI; // returns false (cannot delete non-configurable properties)
 * const myObj = { h: 4 };
 * delete myObj.h; // returns true (can delete user-defined properties)
 * 
 * Deleting array elements
 * Since arrays are just objects, it's technically possible to delete elements from them. 
 * This is however regarded as a bad practice, try to avoid it. 
 * When you delete an array property, the array length is not affected and other elements are not re-indexed. 
 * To achieve that behavior, it is much better to just overwrite the element with the value undefined. 
 * To actually manipulate the array, use the various array methods such as splice.
 * 
 * 
 * typeof
 * The typeof operator returns a string indicating the type of the unevaluated operand. operand is the string, variable, keyword, or object for which the type is to be returned. The parentheses are optional.
 * 
 * The typeof operator returns the following results for these variables:
 * 
 * typeof myFun; // returns "function"
 * typeof shape; // returns "string"
 * typeof size; // returns "number"
 * typeof foo; // returns "object"
 * typeof today; // returns "object"
 * typeof doesntExist; // returns "undefined"
 * 
 * For the keywords true and null, the typeof operator returns the following results:
 * typeof true; // returns "boolean"
 * typeof null; // returns "object"
 * 
 * For a number or string, the typeof operator returns the following results:
 * typeof 62; // returns "number"
 * typeof "Hello world"; // returns "string"
 * 
 * For property values, the typeof operator returns the type of value the property contains:
 * typeof document.lastModified; // returns "string"
 * typeof window.length; // returns "number"
 * typeof Math.LN2; // returns "number"
 * 
 * For methods and functions, the typeof operator returns results as follows:
 * typeof blur; // returns "function"
 * typeof eval; // returns "function"
 * typeof parseInt; // returns "function"
 * typeof shape.split; // returns "function"
 * 
 * For predefined objects, the typeof operator returns results as follows:
 * typeof Date; // returns "function"
 * typeof Function; // returns "function"
 * typeof Math; // returns "object"
 * typeof Option; // returns "function"
 * typeof String; // returns "function"
 * 
 * 
 * void
 * The void operator specifies an expression to be evaluated without returning a value. expression is a JavaScript expression to evaluate. 
 * The parentheses surrounding the expression are optional, but it is good style to use them to avoid precedence issues.
 * 
 * 
 * 
 * 
 *  6. TERNARY OPERATORS (a ? b : c)
 * 
 * The conditional operator is the only JavaScript operator that takes three operands. The operator can have one of two values based on a condition. 
 * 
 * The syntax is:
 * condition ? val1 : val2
 * 
 * If condition is true, the operator has the value of val1. 
 * Otherwise it has the value of val2. 
 * You can use the conditional operator anywhere you would use a standard operator.
 *  EXAMPLE
 *    const status = age >= 18 ? "adult" : "minor";
 *    This statement assigns the value "adult" to the variable status if age is eighteen or more. 
 *    Otherwise, it assigns the value "minor" to status.
 * 
 */