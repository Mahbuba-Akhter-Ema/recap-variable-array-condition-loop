/* 
---------------------
ARRAY
-----------------------
1. What is the purpose?
2. How to declare an array in JS
3. Number of elements in an Array
4. What is index? 
5. Find the value of an element by index
6. Change an element by index
7. get the index of an element by the value
8. what does it mean when you get undefined while getting the value of an element by index
9. How can you add an element to an array at the last position
10. How can you remove the last element from array
11. Add an element at the first position of an array
12. Remove the first element of an array
*/
-----------------------
1. What is the purpose?
-----------------------
The Array object lets you store multiple values in a single variable. It stores a fixed-size sequential collection of elements of the same type. An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type.

---------------------------------
2. How to declare an array in JS;
---------------------------------
Using an array literal is the easiest way to create a JavaScript Array.
var array_name = [item1, item2, ...];      

Exmaple:
var numbers = [12, 13, 14, 15, 16, 17];

---------------------------------
3. Number of elements in an Array
---------------------------------
The length property sets or returns the number of elements in an array.
Exmaple: 
array.length
array.length = number

-----------------
4. What is index?
-----------------
The indexOf() method returns the position of the first occurrence of a value in a string.
The indexOf() method returns -1 if the value is not found.
The indexOf() method is case sensitive.

----------------------------------------
5. Find the value of an element by index
----------------------------------------
var numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers.indexOf(2));

-----------------------------
6. Change an element by index
-----------------------------
Exmaple:
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);
numbers [2] = 88;
numbers[4] = 100;
console.log(numbers);

-------------------------------------------
7. get the index of an element by the value
-------------------------------------------
Exmaple:
var nums = [5, 6, 8, 100, 200];
var positionIndex = numbs.indexOf(100);
console.log(positionIndex);

--------------------------------------------------------------------------
8. what does it mean when you get undefined while getting the value of an element by index
--------------------------------------------------------------------------
The indexOf() method returns -1 if the value is not found. Undefined value primitive value is used when a variable has not been assigned a value.

---------------------------------------------------------------
9. How can you add an element to an array at the last position;
---------------------------------------------------------------
I can add them to the end using their index, the push() method

Exmaple:
var numbers = [12, 14, 16, 20];
numbers.push(89);
console.log(numbers);

---------------------------------------------------
10. How can you remove the last element from array
---------------------------------------------------
The pop() method removes (pops) the last element of an array.
Exmaple:
var numbers = [12, 14, 16, 20];
numbers.pop();
console.log(numbers);

----------------------------------------------------
11. Add an element at the first position of an array
----------------------------------------------------
The unshift() method adds new elements to the beginning of an array. The unshift() method overwrites the original array.

Exmaple:
var friendsName = ['Sadia', 'Sudha', 'Sristy', 'Samiya'];
friendsName.unshift('Taposhi');
console.log(friendsName);

-----------------------------------------
12. Remove the first element of an array
-----------------------------------------
Shift (remove) the first element of the array:
Exmaple:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
