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
 * 
 * 
 * -----------------------
 * | Casting             |
 * -----------------------
 * 
 * convert value form type to another
 * 
 * 1- casting String to Number
 * 
 * Number('12')
 * 
 * -----------------------
 * | Condtions           |
 * -----------------------
 * 
 * 1- IF
 * 2- IF .. else
 * 3- If ... else If ... else if ...  else
 */


var number = Number(window.prompt('Enter your number'));


if (number > 0) {
    window.alert('Positive')
} else if(number < 0) {
    window.alert('Negative')
} else if(number == 0) {
    window.alert('Zero')
} else {
    window.alert('Not a Number')
}


