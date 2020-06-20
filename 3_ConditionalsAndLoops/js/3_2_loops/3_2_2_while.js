let bool = true;
let i = 0
while(bool){ //everything inside here will be executed until "bool" becomes fal
    if(i == 10){ //when i reaches a value of ten
        document.write("and We reached the end of the loop.");
        bool = false; // we reached 10, so we're breaking the loop.
        //note that this is just one form to break this loop, there are several other ways
        //to do this
    }
    else{
        document.write("Round " + i + ", ");
        i++; //we incriment the counter each time that i doesn't equal 10
    }
}
