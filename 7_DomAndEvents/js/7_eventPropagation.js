/* event propagation is the order in which events are handled in the case of having an element inside another
and both have events tied to them. there are two methods */

function paragraph(){
   document.write("PARAGRAPH")
}

function div(){
    document.write("DIVS")
}


/*BUBBLING
The innermost event is handled first*/
let div1 = document.getElementById("div1");
div1.addEventListener("click",div,false); //the default is false so you could let it out if you want.
let p1 = document.getElementById("p1");
p1.addEventListener("click",paragraph)
/* our page will turn into a text spelling "paragraph" as the inermost element acts first and overwrites everything in the page*/

/*CAPTURING
the outhermost event is handled first*/
let div2 = document.getElementById("div2");
div2.addEventListener("click",div,true); //this should be present in the father element
let p2 = document.getElementById("p2");
p2.addEventListener("click",paragraph)
/* our page will turn into a text spelling "divs" as the outhermost element acts first and overwrites everything in the page*/