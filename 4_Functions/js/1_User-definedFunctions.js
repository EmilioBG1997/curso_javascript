/*functions are usefull when code is reused
with functions we only have to write the code once*/

function hi(){ //declaring a function
    document.write("Hola"); //code to be executed
}

hi(); //calling a function
/*functions can also be called with the "function.call()" method, however, using this
we'll be passing the keyword "this" (more about it later)*/

/*we can also set parameters for our function to use
these are variables that our function will use in it's code*/

/*the function bellow will receive a person's age as a parameter
and based on that, will return if this person is an adult yet or not*/

function adult(age){ //age is the parameter
    if(age>=18){
        document.write("<br> you're an adult");
    }
    else{
        document.write("<br>you are not an adult<br>");
    }
}

let robs_age = 16;
adult(robs_age);

/*multiple parameters can be set in the function requierements separating them with commas
function foo(p1,p2,p3){}*/

/*in case you don't want to print the results of the function but you rather use them for other
stuff you can use the "return" keyword, this way whatever you do in your function can be
stored in a variable for example.

we'll define 2 functions one that takes a person's age and returns false if this person is not an adult and 
true if otherwise, and other that takes a name and the previous function's value and returns a String containing 
the name and if this person's an adult or not*/

function isAdult(age){
    if(age >= 18){
        return true; //you see, when a function reaches a "return", the function is immediately terminated
        //this return is like some sort of "break" for a function
    }
    return false;
    //we don't need an "else" and this part of the code will only be executed if the above's
    //condition is not met. (remember, "return" acts like a break )
}

function nameAndAge(string, boolean){
    if(boolean == true){
        
        let my_string = string + " is an adult";
        return my_string
    }
    let my_string = string + " is under age";
    return my_string

}

let talisa_age = 18;
let talisa_name = "Talisa Maegyr";

let _status = isAdult(talisa_age);
console.log(_status); //console.log is a method commonly used to debug. it prints whatever is in the parentheses to the console.

str = nameAndAge(talisa_name,_status);
document.write(str)

//Note: status is an special variable and will always return a String