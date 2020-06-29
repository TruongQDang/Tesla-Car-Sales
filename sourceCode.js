//signIn.html
let allUserAcc = [];

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
    console.log(allUserAcc);
    window.location.href = "signIn.html";
}

localStorage["allUserAcc"] = JSON.stringify(allUserAcc);
allUserAcc = JSON.parse(localStorage.allUserAcc)
console.log(allUserAcc)