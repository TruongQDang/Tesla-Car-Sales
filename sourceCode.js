/////MASTER: SIGN IN PAGE
//
if (sessionStorage["allUserAcc"] == "") {
    var allUserAcc = []
} else {
    var allUserAcc = JSON.parse(sessionStorage["allUserAcc"]);    
}

//signIn.html
function saveUserAcc() {
}

function directCreateAcc() {
    window.location.href = "createAcc.html";
}

//createAcc.html
function createAcc() {
    let oneUserAcc = {};
    oneUserAcc["firstName"] = document.getElementById("firstName").value;
    oneUserAcc["lastName"] = document.getElementById("lastName").value;
    oneUserAcc["email"] = document.getElementById("email_createAcc").value;
    oneUserAcc["password"] = document.getElementById("password_createAcc").value;
    allUserAcc.push(oneUserAcc);
    sessionStorage["allUserAcc"] = JSON.stringify(allUserAcc);
    console.log(sessionStorage["allUserAcc"])
    window.location.href = "signIn.html";
}
console.log("Session storage: " + sessionStorage["allUserAcc"])
console.log( allUserAcc)
