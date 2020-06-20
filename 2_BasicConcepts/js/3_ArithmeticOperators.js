// an example of a sum
let x = 1 + 2;
document.write(x + "<br>");
//an example of a substraction
let y = 15 - 5
document.write(y + "<br>");
//an example of a multiplication
let z = x * y; //you can use variables too
document.write(z + "<br>");
//an example of a division
let a = z / y
document.write(a + "<br>");
//an example of a module operation
let b = 5%2;
document.write(b + "<br>");
//adding 1 (usefull for loops)
let c = 1;
c++; //pun definitely intended
document.write(c + "<br>");
//decrementing 1 (usefull in loops as well)
let d = 1;
d--;
document.write(d + "<br>");
//multiple operations can be done within a single line

//the eval function takes a string and if it has an operation inside
//returns the value.

let str= "10 * 20";
let e = eval(str);
document.write(e);