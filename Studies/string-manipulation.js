/**
 * STRING MANIPULATION
 * 
 * 0. DEFINITION & BACKGROUND
 *  There are many ways to manipulate a string; be mindful of whether I want my string to be mutated or not.
 * 
 * 
 * //1. WITH OPERATORS
 * 
 * 2. WITH STRING METHODS
 * 
 * concat()
 * Returns two or more joined strings	The concat() method joins two or more strings.
 * The concat() method does not change the existing strings.
 * The concat() method returns a new string.
 *  EXAMPLE:
 *    const str1 = 'Hello';
 *    const str2 = 'World';
 *    console.log(str1.concat(' ', str2));
 *    // Expected output: "Hello World"
 *    console.log(str2.concat(', ', str1));
 *    // Expected output: "World, Hello"
 * 
 * slice()
 * SYNTAX:
 * string.slice(start, end)	Extracts a part of a string and returns a new string	The slice() method extracts a part of a string.
 * 
 * The slice() method returns the extracted part in a new string.
 * The slice() method does not change the original string.
 * The start and end parameters specifies the part of the string to extract.
 * The first position is 0, the second is 1, ...
 * A negative number selects from the end of the string.
 *  EXAMPLE:
 *    const str = 'The quick brown fox jumps over the lazy dog.';
 *    console.log(str.slice(31));
 *    //Expected output: "the lazy dog."
 * 
 * split()
 * Splits a string into an array of substrings	The split() method splits a string into an array of substrings.
 * The split() method returns the new array.
 * The split() method does not change the original string.
 * If (" ") is used as separator, the string is split between words.
 *  EXAMPLE:
 *    const str = 'The quick brown fox jumps over the lazy dog.';
 *    const words = str.split(' ');
 *    console.log(words[3]);
 *    //Expected output: "fox"
 * 
 * const sentence = 'The quick brown fox jumps over the lazy dog.';
 * 
 * toUpperCase()
 * The toUpperCase() method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).
 *  EXAMPLE:
 *    console.log(sentence.toUpperCase());
 *    //Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
 * 
 * 
 * ESCAPE CHARACTERS
 * Inserting tags preceded by backslash in order to visually manipulate the string.
 * Backslash    
 * \	
 * Escape Character- indicates that the next character should be treated as a literal character.	SEE BELOW
 * 
 * single quote	
 * \'	
 * Self explanatory
 * 
 * double quote	
 * \"	
 * Self explanatory
 * 
 * backslash	
 * \\	
 * Self explanatory
 * 
 * newline	
 * \n	
 * Like hitting enter/return to start on the next line.
 * carriage return	
 * \r	
 * EXAMPLE:
 * console.log("This whole long-** line of text shows\rCarriage Return"); 
 * // Carriage Return-** line of text shows
 * NOTE- Carriage Return ( \r ) just returns the cursor to the beginning of the same line (without advancing to the next line). 
 * It doesn’t hit enter to go to a new line. 
 * It overwrites stuff that was already there- either partially or entirely depending on how long the old stuff was vs what follows \r! 
 * 
 * vertical tab	
 * \v	
 * EXAMPLE:
 * console.log("This\vbackspace"); 
 * //(see below for true results)
 * This
 *     backspace
 * 
 * tab	
 * \t	
 * EXAMPLE:
 * console.log("This\tbackspace"); 
 * //This    backspace
 * 
 * backspace	
 * \b	
 * EXAMPLE:
 * console.log("This\bbackspace"); 
 * //Thibackspace

 * Template Literals
 * Using backticks as bookends to type the string exactly as you want it to appear.
 * 
 * `       `	Backticks(shares tilde key)   
 * Template literals- use opening and closing backticks like tags
 * 
 * ${ }	
 * Called a placeholder; optional component within template literal. 
 * 
 * Backslash Notes: 
 * Insert the backslash right there inside the string as you’re typing.
 * Do not add spaces after the escape characte
 * Backtick Notes:
 * Everything contained within the opening and closing backticks will return the string exactly as I type it, including spaces and new lines.
 * 
 * Placeholder $ { } Notes:
 * converts the contents (e.g. a variable) into a string OR can call a function from within the string. The strings and placeholders get passed to a function — either a default function, or a function you supply. The default function (when you don't supply your own) just performs string interpolation to do substitution of the placeholders and then concatenate the parts into a single string.
 * To supply a function of your own, precede the template literal with a function name; the result is called a tagged template.
 * 
 * 
 */
