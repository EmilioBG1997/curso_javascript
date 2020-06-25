let img = 1;

function next(){
    if(img == 3){
        img = 1;
    }
    else{
        img++;
    }
    let img_slider = document.getElementById("slider");
    img_slider_string = "demo8_imgs/"+ img+".jpg";
    img_slider.src=img_slider_string;
}
function previous(){
    if(img == 1){
        img = 3;
    }
    else{
        img--;
    }
    let img_slider = document.getElementById("slider");
    img_slider_string ="demo8_imgs/"+ img+".jpg";
    img_slider.src=img_slider_string;
}

let button_next = document.getElementById("next");
let button_prev = document.getElementById("prev");

button_next.addEventListener("click",next);
button_prev.addEventListener("click",previous);
