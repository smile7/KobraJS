function registerUser() {
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
            }
        }
    }
    xmlhttp.open("GET", "register.asp", true);
    xmlhttp.send();
}

function logUserIn() {
    for (i = 0; i < users.length; i++) {
        if (users[i].uName == document.getElementById('userName').value) {
            window.location.href = "game.asp?user=" + users[i].uName;
        }
    }
    alert("no such user please register");
}