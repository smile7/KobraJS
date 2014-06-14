
<!--#include file="mainIncludes.asp"-->
<title>Hello</title>
</head>
<body>
    <form id="myForm">
        User Name: <input id="userName" type="text" />
        <input type="button" id="logIn" onclick="logUserIn(document.getElementById('userName').value);" value="Log In" />
        <input type="button" id="register" onclick="registerUser();" value ="Register"/>
    </form>
</body>
<script type="text/javascript">
    if (typeof (Storage) !== "undefined") {
        if (localStorage.userName != "" && typeof(localStorage.userName) !== "undefined") {
            logUserIn(localStorage.userName);
        }
    } else {
        if (getCookie("userName") != "" && typeof(getCookie("userName")) !== "undefined") {
            logUserIn(getCookie("userName"));
        }
    }
</script>
</html>