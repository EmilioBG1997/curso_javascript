// an example of a sum
x = 1 + 2;
document.write(x + "<br>");
//an example of a substraction
var y = 15 - 5
document.write(y + "<br>");
//an example of a multiplication
var z = x * y; //you can use variables too
document.write(z + "<br>");
//an example of a division
var a = z / y
document.write(a + "<br>");
//an example of a module operation
var b = 5%2;
document.write(b + "<br>");
//adding 1 (usefull for loops)
var c = 1;
c++; //pun definitely intended
document.write(c + "<br>");
//decrementing 1 (usefull in loops as well)
var d = 1;
d--;
document.write(d + "<br>");
//multiple operations can be done within a single line

//the eval function takes a string and if it has an operation inside
//returns the value.

var str= "10 * 20";
var e = eval(str);
document.write(e);