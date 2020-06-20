alert("hey this is an alert;)"); //calls the alert function of your browser and displays
//the message

/*the prompt function calls the prompting function of your browser
which surprisingly enough, will show a prompt asking for a value
this value can be stored in a variable if the "ok" button is clicked
however if the cancel button is clicked, "null" will be the variable's
value*/ 
let prompt_name = prompt("Please enter your name here"); 
if(prompt_name == null){
    alert("You are a smart guy huh? we will call you jerry");
    prompt_name = "jerry";
}
alert("hi, " + prompt_name);

/*Now, for the "confirm", it returns a boolean (true or false)
if Ok is clicked -> true is returned
if cancel is clicked -> false is returned
this values can be stored into a variable too
*/
bool = confirm("are we getting married?");
if(bool){
    alert("I love u " + prompt_name);
}
else{
    alert("Sucks that you're marrying me anyway");
}