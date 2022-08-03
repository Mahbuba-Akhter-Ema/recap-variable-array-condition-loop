/* 
------------------
VARIABLE
-------------------
1. What is JavaScript?
2. How does JS Works?
3. What is Variable?
4. Declare a variable
5. Types of Variable? How can you find out type of a variable
6. Primitive and non-primitive data types
7. Naming Convention of JS variables
8. Math Operation +, -, *, /, %
9. Short hand: +=, -=, *=, /=
10. ++, --
11. parseInt, ParseFloat
12. toFixed
*/
----------------------
1. What is JavaScript?
----------------------
JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.

----------------------
2. How does JS Works?
----------------------
The source code is passed through a program called a compiler, which translates it into bytecode that the machine understands and can execute. In contrast, JavaScript has no compilation step. Instead, an interpreter in the browser reads over the JavaScript code, interprets each line, and runs it.

----------------------
3. What is Variable?
----------------------
Variable means anything that can vary. In JavaScript, a variable stores the data value that can be changed later on. Use the reserved keyword var to declare a variable in JavaScript.

----------------------
4. Declare a variable!
----------------------
var bestFriend = 'Taposhi';
console.log(bestFriend);

-------------------------------------------------------------
5. Types of Variable? How can you find out type of a variable;
-------------------------------------------------------------
There Is three type of Variables;
* Numaric (var num = 21;)
* Name (var name = 'Mahdiyah')
* Boolean (var isHappy = true/false;)

I can find out type of a variable:
var num = 21;
console.log(typeof num);

var nam = 'Mahbuba'
console.log(typeof nam);

var isHappy = false;
console.log(typeof isHappy);

-----------------------------------------
6. Primitive and non-primitive data types
-----------------------------------------
The Primitive Data types in JavaScript include Number, String, Boolean, Undefined, Null and Symbol. The Non-Primitive data type has only one member i.e. the Object.
Below is a list of data types that JavaScript can have:
Number.
String.
Boolean.
Undefined.
Null.
Object.
Symbol.

------------------------------------
7. Naming Convention of JS variables
------------------------------------
** use camelCase for identifier names (variables and functions).
** All names start with a letter.
** At the bottom of this page, you will find a wider discussion about naming rules.
** Always put spaces around operators ( = + - * / ), and after commas:
** Always use 2 spaces for indentation of code blocks:
** Always end a simple statement with a semicolon.
General rules for complex (compound) statements:
---------
& Put the opening bracket at the end of the first line.
& Use one space before the opening bracket.
& Put the closing bracket on a new line, without leading spaces.
& Do not end a complex statement with a semicolon.

*** Always use the same naming convention for all your code. For example:
Variable and function names written as camelCase
Global variables written in UPPERCASE (We don't, but it's quite common)
Constants (like PI) written in UPPERCASE

--------------------------------
8. Math Operation +, -, *, /, %
--------------------------------
+ Means Addition
Example: var x = 100 + 50;

- Means Subtraction
Example: 
let x = 5;
let y = 2;
let z = x - y;

* Means Multiplication
Example:
let x = 5;
let y = 2;
let z = x * y;

/ Means Division
Example:
let x = 5;
let y = 2;
let z = x / y;

% Means Modulus (Remainder)
Example:
let x = 5;
let y = 2;
let z = x % y;

--------------------------------
9. Short hand: +=, -=, *=, /=
--------------------------------
** The addition assignment operator (+=) adds a value to a variable.
Example:
let text1 = "What a very ";
text1 += "nice day";
The result of text1 will be:
What a very nice day

** The subtraction assignment operator (-=) subtracts the value of the right operand from a variable and assigns the result to the variable.
Example: 
let a = 2;
console.log(a -= 3);
// expected output: -1
console.log(a -= 'Hello');
// expected output: NaN

** The multiplication assignment operator (*=) multiplies a variable by the value of the right operand and assigns the result to the variable.
Example:
let a = 2;
console.log(a *= 3);
// expected output: 6
console.log(a *= 'hello');
// expected output: NaN

** The division assignment operator (/=) divides a variable by the value of the right operand and assigns the result to the variable.
Example:
let a = 3;
console.log(a /= 2);
// expected output: 1.5
console.log(a /= 0);
// expected output: Infinity
console.log(a /= 'hello');
// expected output: NaN

------------
10. ++, --
------------
** The increment operator (++) increments (adds one to) its operand and returns a value.
Example:
let x = 3;
y = x++;
// y = 3
// x = 4

** The decrement operator (--) decrements (subtracts one from) its operand and returns a value.
Example:
let x = 3;
y = x--;
// y = 3
// x = 2
-------------------------
11. parseInt, ParseFloat
-------------------------
The parseInt method parses a value as a string and returns the first integer.
A radix parameter specifies the number system to use:
2 = binary, 8 = octal, 10 = decimal, 16 = hexadecimal.
Example: 
parseInt("10");
parseInt("10.00");
parseInt("10.33");

The parseFloat() method parses a value as a string and returns the first number.
Example:
parseFloat(10);
parseFloat("10");
parseFloat("10.33");

------------
12. toFixed
------------
The toFixed() method converts a number to a string.
The toFixed() method rounds the string to a specified number of decimals.
Example:
let num = 5.56789;
let n = num.toFixed(10);