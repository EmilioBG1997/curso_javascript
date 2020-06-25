//events need functions to work

function button1click(){
    let input1 = document.getElementById("input1");
    input1.value = parseInt(input1.value) + 1 ;
    if(input1.value == 1302){
        alert("you played for long enough");
        document.getElementById("button1").disabled = true;
        document.getElementById("input2").value = 2016;
        document.getElementById("button2").disabled = true;
        document.body.style.background = "black";
        document.body.style.color = "white";
    }
}
function sayHi(){
    alert("Hi, welcome to my site");
}


let button1 = document.getElementById("button1");
button1.onclick= button1click; //the function will be executed when clicking a button
window.onload = sayHi;

//we can also add an event handler

function button2click(){
    let input2 = document.getElementById("input2");
    input2.value = parseInt(input2.value) - 1;
    if(input2.value == 2016){
        alert("you played for long enough");
        document.getElementById("button2").disabled = true;
        document.getElementById("input1").value = 1302;
        document.getElementById("button1").disabled = true;
        document.body.style.background = "black";
        document.body.style.color = "white";
    }
}

let button2 = document.getElementById("button2");
button2.addEventListener("click",button2click);
