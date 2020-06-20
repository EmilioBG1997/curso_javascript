//objects are variables but with properties
let person={ //an example of an object 
    name: "Emilio", 
    lname: "Barrera",
    birth: "16/12/1997",
    fColor: "Green", 
    //properties are separated by commas, an object can have an unlimited amount of properties
    
    toString(){ //an object can contain functions
        str = "name: " + this.name;
        str += "<br>last name: " + this.lname;
        str += "<br>birthdate: " + this.birth;
        str += "<br>favorite color: " + this.fColor;
        return str;
    }
};
document.write(person.name); //we can acces an object property this way

document.write("<br>"+person.name.length+"<br>") //lenght counts the number of characters in a String
//the syntax goes like this: "objectName.propertyName"

document.write(person.toString()); //we can acces an object's function the same way we acces a property

//objects can be created using classes and a constructor


class people { //a class is able to construct objects
    constructor(name, lname, birth, fColor) { //the class's constructor method manages the properties
    //of the object.
        this.name = name;
        this.lname = lname;
        this.birth = birth;
        this.fColor = fColor;
    }

    getName(){ //methods are class specific functions
        return this.name;
    }
    setName(name){ //we can modify an object's property with a set
        this.name = name;
    }
}
// we can build an object by calling it's class contstructor. 
let Emilio = new people("Emilio","Barrera","16/12/97","Green"); //the correct way to call an object's contructor
document.write("<br>" + Emilio.name + "<br>"); //properties can be accessed the same way as before.
document.write("<br>" + Emilio.getName()); // accessing an object's method
Emilio.setName("Milin"); //now Emilio's name property's value will be: "Milin"
document.write("<br>"+Emilio.getName());
