function showUsername() {
    
    if (sessionStorage.loggedIn == "true") {
        document.getElementById("signin-name").innerHTML = sessionStorage.currentUser
    }
}