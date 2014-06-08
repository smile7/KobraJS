function registerUser() {
    var uName = document.getElementById('userName').value;
    if (uName.length<3 ) {
        alert("at least 3 symbols for user name")
    }
    else {
        var xmlhttp;
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }
        else {// code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                if (xmlhttp.responseText == "sucsess") {
                    alert("sucsessfull registration (work in progress, aslo could use a fancy message box)");
                    window.location.href = "game.asp?user=" + uName;
                }
                else if (xmlhttp.responseText == "error2") {
                    alert("username taken");
                }
                else if (xmlhttp.responseText == "error1") {
                    alert("an error occured on the server please try again later.");
                }
            }
        }
        xmlhttp.open("GET", "register.asp?uName=" + document.getElementById('userName').value, true);
        xmlhttp.send();
    }
}

function logUserIn() {
    var logged=false
    for (i = 0; i < users.length; i++) {
        if (users[i].uName == document.getElementById('userName').value) {
            window.location.href = "game.asp?user=" + users[i].uName;
            logged = true;
        }
    }
    if (logged == false) {
        alert("no such user please register");
    }
}