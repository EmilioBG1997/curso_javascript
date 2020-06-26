function validate(){
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");

    if(input2.value != "" && input1.value != ""){
        return true;
    }
    alert("Please fill both fields");
    return false;
}
/*the function must be assigned in the "onsubmit" property of the form
as "return functionName()" to get the return value. the form will only
be submited if the return value is true*/
