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
    //boolean to check matches
    let notMatch = true;
    //compare with existing database and return corresponding result
    for (let i = 0; i < allUserAcc.length; i++) {
        //if match, then alert and make boolean false
        if (userEmail == allUserAcc[i].email && userPassword == allUserAcc[i].password) {
            alert("Successfully Logged In");
            notMatch = false;
        }
    }
    if (notMatch) {
        alert("Wrong username or password");
    }
}

function directCreateAcc() {
    window.location.href = "createAcc.html";
}