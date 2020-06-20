/*
&& represents AND
|| represents OR
! represents NOT (negates the result [if true then false])
*/

var a = 3;
var b = 4;
let result = (a == b || a != b); //will return true because one of the conditions is met.
document.write(result + "<br>");

let z = 3;
let y = 3;
result = (z>2 && z == y); //will return true because both of the conditions are met
document.write(result + "<br>");

z = 3;
y = "3";
result = (z>=3 && !(z===y)); //will return true because both of the conditions are met
//z and y are not strictly equals BUT the ! operator negates the result so both conditions are true
document.write(result + "<br>");

//the ternary (?) operator returns the value left to the : if the condition is met, otherwise it 
//returns the value to the right 
let age = 17
let isAdult = (age < 18)?"Too young": "Old enough";
document.write(isAdult); //will return "too young" because the condition is indeed met.
