// starting position
let pos = 0; 
//our box element
let box = document.getElementById("box");

function move() {
  pos += 1;
  box.style.left = pos+"px"; //px = pixels
  box.style.top = pos+"px";

  if (pos >= 150){
    clearInterval(t);
  }
}

let t = setInterval(move, 100); 

