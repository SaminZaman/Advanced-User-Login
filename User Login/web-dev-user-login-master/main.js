//Checking to make sure only authorized logins are accepted
"use strict";


//Event Listeners
document.getElementById("login-btn").addEventListener("click", infoCheck)

//Event Functions
function infoCheck() {
    let username = document.getElementById("username").value;
    let password =  document.getElementById("password").value;

    if (username == "Samin" && password == "isawesome")  {
       alert("Sign In Succesful")
    }
    else if  (username == "Samin" && password != "isawesome") {
       alert("Sign In Unsuccessful - Incorrect Password")
    }
    else if  (username != "Samin" && password == "isawesome") {
        alert("Sign In Unsuccessful - Incorrect Username")
    }

    else {
        alert("Sign In Unsuccessful - Incorrect Username and Password")
    }
}