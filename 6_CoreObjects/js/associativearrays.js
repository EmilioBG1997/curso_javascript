let person = [];
person["name"] = "John"; //Associative arrays are similar to objects
//however, "properties" are declared within quotes.
//this properties are treated like indexes.

let person2={ //for readability purposes you can separate the array like this
    "name": "Emilio",
    "lname": "Barrera",
    "fcolor": "Green"
};

for(let i in person2){//to print an associative array
    document.write(i + ": " + person2[i] + "<br>");
    //variable i will have the name of the key
}    