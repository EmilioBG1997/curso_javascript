let div1 = document.getElementById("example1"); //we get the "example1" div which is the father of "child1" and "child3"
let p1 = document.createElement("p"); //we create a new paragrap
let node1 = document.createTextNode("Hi i'm text 1.5, added with javascrip"); //we create a new text
p1.appendChild(node1); //we append the text to the paragraph
p1.id="child2" //We assign an id to the paragraph in order to keep track of it
div1.insertBefore(p1,document.getElementById("child3")) //we insert the paragraph  before the child3
document.getElementById("child2").innerHTML = "Hi i'm text 1.5, added with javascript"; //we modify the text in order to verify the id was assigned correctly
let p2 = document.createElement("p");
p2.innerHTML = "Im text 3, added with javascript too";
p2.id = "child4";
div1.appendChild(p2); //p2 is now the last child of the "example1"

//if we wanted to remove an element
//first we get the parent element
let parent = document.getElementById("example2");
let child = document.getElementById("e2child1");
//then we use the element's method: "removeChild"
parent.removeChild(child);

//we can also replace  an element with another
let child2 = document.createElement("p");
child2.innerHTML = "He was not deleted:3 but he got replaced by me>:D";
let replaced = document.getElementById("e2child2");
parent.replaceChild(child2,replaced);//replace(newNode,oldNode)