/*the switch statement is usefull if you want to make
the code look a little cleaner. It will help you eliminate
multiple "if else if else if else if..." statements
*/
let day = 8;
switch(day){ //the variable that will be evaluated goes inside the parenthesis
    case 1: //if the variable's value equals 1
        document.write("<p>Today is Monday</p>");//Everything here will be executed
        break; //we use the break statement to tell the javascript to not continue with the switch statement.
        //otherwise, it would continue doing everything following the met condition.
    case 2:
        document.write("<p>Today is Tuesday</p>");
        break;
    case 3:
        document.write("<p>Today is Wednesday</p>");
        break;
    case 4:
        document.write("<p>Today is Thursday</p>");
        break;
    case 5:
        document.write("<p>Today is Friday</p>");
        break;
    case 6:
        document.write("<p>Today is Saturday</p>");
        break;
    case 7:
        document.write("<p>Today is Sunday</p>");
        break;
    case 8:
        document.write("<p>There's not an 8th day.</p>")
        //here we're going to showcase what happens if there's no break statement
    default://this will be executed if none of the above conditions are met
        document.write("<p>There's only 7 days in the week, not " + day +"</p>");
}   
