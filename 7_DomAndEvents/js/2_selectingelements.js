//we create a variable that stores the html element
let example1 = document.getElementById("ex1");
example1.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quaerat totam incidunt fugiat, veritatis aperiam maiores aspernatur dolorum culpa? Adipisci nisi reprehenderit qui, non nemo tempore aut repellendus quo voluptate.";
//the "innerHTML" method replaces whatever is in the tag with whatever you want.

//we can also get elements by class name
let example2 = document.getElementsByClassName("ex2"); //this will result in an array containing all of the elements that share the same class
example2[0].innerHTML = "I";
example2[1].innerHTML = "am";
example2[2].innerHTML = "JAVASCRIPT";

//also by their tags
let example3 = document.getElementsByTagName("example3");
example3[0].innerHTML="wololo <br>";
example3[1].innerHTML="wololo <br>";
example3[2].innerHTML="wololo <br>";
//with these method we can create our own tags as well


/*Working with DOM
Each element in the DOM has a set of properties and methods that provide information about their relationships in the DOM:
element.childNodes returns an array of an element's child nodes.
element.firstChild returns the first child node of an element.
element.lastChild returns the last child node of an element.
element.hasChildNodes returns true if an element has any child nodes, otherwise false.
element.nextSibling returns the next node at the same tree level.
element.previousSibling returns the previous node at the same tree level.
element.parentNode returns the parent node of an element.*/


//selecting al node childs of an element
let ex4=document.getElementById("example4").childNodes; //ex4 is now an array storing all child nodes of the element with the id
for(let i in ex4){
    ex4[i].innerHTML = "I'm a child node of example4";
}
