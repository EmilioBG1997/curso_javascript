/*in the previous script we learned to select elements
and to change their contents using the InnerHTML property*/

//Now we are going to learn how to change their properties
let input1 = document.getElementById("example1"); //first we select the element
input1.value="Javascript assigned me:)" //then we access the desired property like this and assign the desired value

//we can also edit the href of an "a" tag
let a1 = document.getElementById("example2");
a1.href="http://www.github.com"
a1.innerHTML = "github"

//we can change the style of an element
let div1 = document.getElementById("example3");

div1.style.width = "100px";
div1.style.background = "black";
div1.style.color = "white";
div1.innerHTML = "hola";
div1.style.textAlign = "center";
//you can select and change virtually every property of an element