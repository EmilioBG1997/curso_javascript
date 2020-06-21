let a = new Array('1','2','3'); //an array
document.write(a);
a = ['1','2','3']; //this is an array as well
document.write("<br>" + a);
//elements can be modified if accessed by it's index
//if we wanted to change '2' to 'aleman' (spanish for german)
//we would do the following
a[1] = "aleman" //[n] being the index from 0 to the lenght of the array
document.write("<br>" + a);
//if we were to try to access an unexisting index the output would return
//"undefined"
document.write("<br>" + a[10]); //accessing index 10 will return undefined
a[10] = "hola";
document.write("<br>" + a + "<br>"); 
document.write(a.length); //returns the lenght of the array (last index + 1)
//Array can be concatenated
let b = [1,2,3];
let c = ["one","two","three"];
b = b.concat(c);
//b now has everything c has
document.write("<br>" + b);