/*The setInterval Function
Calls a function every x miliseconds
Syntax: setInterval(function,time)
This behaviour will continue until
the clearInterval function is called*/
boolean = false;

if(boolean){ //if you want to test this, just change the boolean value to true
    let counter = 0;
    let my_func = setInterval(sayhi,3000); //we start the interval
    function sayhi(){
        alert("hi");
        counter++;
        if(counter == 5){
            alert("bye");
            clearInterval(my_func); //if we reach 5, we'll end the intervals
        }
    }
}
else{
    document.write("to test the setInterval() function, please reffer to the code");
}

/*The Date object enables us to work with dates.
A date consists of a year, a month, a day, an hour, a minute, a second, and milliseconds.

Using new Date(), create a new date object with the current date and time.
var d = new Date();  <- d now stores the current date and time
The other ways to initialize dates allow for the creation of new date objects from the specified date and time.
new Date(milliseconds)
new Date(dateString)
new Date(year, month, day, hours, minutes, seconds, milliseconds)

JavaScript dates are calculated in milliseconds from 01 January, 1970 00:00:00 Universal Time (UTC). One day contains 86,400,000 millisecond.

For example:
//Fri Jan 02 1970 00:00:00
var d1 = new Date(86400000); 

//Fri Jan 02 2015 10:42:00
var d2 = new Date("January 2, 2015 10:42:00");

//Sat Jun 11 1988 11:42:00
var d3 = new Date(88,5,11,11,42,0,0);

JavaScript counts months from 0 to 11. January is 0, and December is 11.
Date objects are static, rather than dynamic. The computer time is ticking, but date objects don't change, once created.
(sololearn)
*/

let c_date = new Date(); //get's the current date
let o_date = new Date("January 2, 2015 10:42:00"); //o_date is now storing a variable with the values of 01/2/2015


/*Function that prints the current date and time every second*/
function printTime() {
    let d = new Date();
    let hours = d.getHours();
    let mins = d.getMinutes();
    let secs = d.getSeconds();
    document.body.innerHTML = "<h1>" + hours+":"+mins+":"+secs +"</h1>"; //the innerHTML puts the string in the selected element (this time it's the body element)
    //we could select any other element in the html with a "getElementById(id)" method

  }
  setInterval(printTime, 1000);
