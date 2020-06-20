let num = 42; //data type is assigned automatically
document.write(num);
num = "Hola"; //In javascript you can change a variable's value whithout much trouble.
document.write("<br>" + num);
let dpfpn = 55.22 //numbers are always stored as double precison floating point number
document.write("<br>"+ dpfpn);

//String values are any text that appears within quotes (single or doubles)
let name = 'john';
let fullName =  "john smith";
//You can include quotation marks in a String as long as they don't match the quotes surrounding the string
let text = "My name is 'John', 'John Smith'";
document.write(text);
//alternatively, you can "escape" the same quotation mark using \ followed by the mark
let x = "<br> I'm a \"STRING\"<br>";
document.write(x);

//boolean variables can hold 2 values <true> and <false>
let boolean = true;
boolean = false;
document.write(boolean)
// a value of 0 (zero) is also a false
//every other value is true