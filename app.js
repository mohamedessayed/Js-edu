/**
 * 
 * documnet ----> refere to HTML file
 * 
 * 
 * window  -----> refere to Web Browser
 * 
 * 
 * 
 * to print message vai web browser ---> window.alert('enter your message')
 * to print message to developer vai web browser ---> window.console.log('developer message')
 * 
 * 
 * to take data vai web browser --> window.prompt('input Label')
 * 
 * ------------------------------------------------
 * | Variables                                    |
 * ------------------------------------------------
 * 
 * var variableName = "mohamed"
 * 
 * Variable name Rules
 * 1. strating with charcters or _ or $
 * 2. not have special charcters like , ' " @ #
 * 3- not start with numbers
 * 
 * ------------------------------------
 * | Varibales Types                  |
 * ------------------------------------
 * 
 * 1- string
 * 2- number
 * 3- undefined
 * 4- boolean
 * 5- object
 * 
 * -----------------------
 * | Operators           |
 * -----------------------
 * 1- Math operator ( + , - , * , / , % )
 * 2- concation operator ( + )
 * 3- Compersion operator ( < , > , == , != , <= , >= , === , !== ) 
 * 4- Binnary operator ( && , || , ! )
 * 
 * -----------------------
 * | Casting             |
 * -----------------------
 * 
 * convert value form type to another
 * 
 * 1- casting String to Number
 * 
 * Number('12') => 12
 * Number('abc') => NaN
 * 
 * -----------------------
 * | Condtions           |
 * -----------------------
 * 
 * 1- IF
 * 2- IF .. else
 * 3- If ... else If ... else if ...  else
 * 
 * 
 * -----------------------
 * | Loops               |
 * -----------------------
 * 
 * 1- For
 * 2- while
 * 3- do while
 * 
 * -----------------------
 * | Function            |
 * -----------------------
 * 1- function without input, without return result
 * 2- function with input, with return result
 * 3- function without input, with return result
 * 
 * 
 * function will excute when i call it
 * 
 * -----------------------
 * | Array               |
 * -----------------------
 * 
 * 1- array define using squar barket "[]"
 * 2- Array start index  = 0
 * 3- Array last index =  n-1 where n =  array item count
 * 4- to get array item count you must use keyword "length"
 * 
 * array printing
 * 
 * 1- to print specific item in array we use arrayVariable[itemIndex]
 * 2- to print all array items use "for loop"
 * 
 * set array value
 * 
 * 1- array set values to an index we use arrayVariable[itemIndex] = newValue
 * 
 * 
 * array functions
 * -----------------
 * 
 * 1- Push add item in last of array
 * 2- unshift add item in first of array
 * 
 * 3- pop remove last element
 * 4- shift remove first element
 * 
 */


var contacts = [];

contacts.unshift('Ghada')

contacts.unshift('Salma')

contacts.unshift('Mai')

contacts.shift()

console.log(contacts);




