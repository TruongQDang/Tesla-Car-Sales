/////***** MASTER: SIGN IN PAGE

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

///*** signIn.html

//take input and compare with existing account database
function checkUserAcc() {
    //take input
    let userEmail = document.getElementById("email").value;
    let userPassword = document.getElementById("password").value;
    //compare with existing database and return corresponding result
    for (let i = 0; i < allUserAcc.length; i++) {
        if (userEmail == allUserAcc[i].email && userPassword == allUserAcc[i].password) {
            alert("Successfully Logged In");
        } else {
            alert("Wrong!")
        }
    }
}

function directCreateAcc() {
    window.location.href = "createAcc.html";
}

///*** createAcc.html

/* 
- This function is bound to Create Account button in Create Account Page
- When clicked, save user account into sessionStorage
- Switch to signIn.html
*/
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
console.log(allUserAcc);
console.log(sessionStorage.allUserAcc)
