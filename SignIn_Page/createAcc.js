/* return array data from sessionStorage 
and use those to initiate allUserAcc */
if (sessionStorage.allUserAcc == null) {
    /* 1. If sessionStorage have no array data, allUserAcc is still 
    array so that it can perform array methods in later stage */
    var allUserAcc = []
    /* 2. If sessionStorage have array data, initiate allUserAcc 
    with sessionStorage */
} else {
    var allUserAcc = JSON.parse(sessionStorage.allUserAcc);
}

function createAcc() {
    let oneUserAcc = {};
    let same = false;
    oneUserAcc["firstName"] = document.getElementById("firstName").value;
    oneUserAcc["lastName"] = document.getElementById("lastName").value;
    oneUserAcc["email"] = document.getElementById("email_createAcc").value;
    oneUserAcc["password"] = document.getElementById("password_createAcc").value;
    if (allUserAcc.length == 0) { //if allUserAcc is empty, push data 
        allUserAcc.push(oneUserAcc);
        sessionStorage["allUserAcc"] = JSON.stringify(allUserAcc);
        window.location.href = "signIn.html";
    } else { //if not empty, check with existing email
        for (let i = 0; i < allUserAcc.length; i++) {
            if (oneUserAcc.email == allUserAcc[i].email) {
                same = true;
            }
        }
        if (same) { //if match, then alert; if not, push into sessionStorage
            alert("Email already existed!");
        } else {
            allUserAcc.push(oneUserAcc);
            sessionStorage["allUserAcc"] = JSON.stringify(allUserAcc);
            window.location.href = "signIn.html";
        }
    }
}
console.log(allUserAcc)

function directSignIn() {
    window.location.href = "signIn.html"
}