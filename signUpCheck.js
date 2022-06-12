//function to check if input was empty
function checkInput(elementId){
    var value = document.getElementById(elementId).value;
    if (value == "") {
        return "Empty";
    }
}
//function to turn something red as in error
function showError(elementId) {
    //showing error message
    var messageId = elementId + "Error"
    document.getElementById(messageId).style.display = "block";
    //making box red
    document.getElementById(elementId).style = "border: 3px solid rgb(255, 122, 122); background: url('images/icon-error.svg') no-repeat scroll 510px 12px;";
    if (elementId == "email") {
        document.getElementById(elementId).value = "email@example.com";
        document.getElementById(elementId).style = "width: 80%; border: 3px solid rgb(255, 122, 122); background: url('images/icon-error.svg') no-repeat scroll 510px 12px; color: rgb(255, 122, 122);";
    } else {
        document.getElementById(elementId).placeholder = "";
    }
}

//function to use on button
function buttonCheck(){
    const fields = ["firstName", "lastName", "email", "password"];
    var fieldLength = fields.length;
    for (var i = 0; i < fieldLength; i++) {
        var inputGiven = checkInput(fields[i]);
        if (inputGiven == "Empty"){
            showError(fields[i]);
        }
    }
}