const signupBtn = document.getElementById("signupBtn");

const nom = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

signupBtn.addEventListener("click", function () {

    if(email.value === ""){
        alert("Veuillez remplir l'email");
    }

    else if(nom.value === ""){
        alert("Veuillez remplir le username");
    }

    else if(password.value === ""){
        alert("Veuillez remplir le mot de passe");
    }

    else{

        localStorage.setItem("username", nom.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);

        alert(
            "name: " + nom.value +
            "\nemail: " + email.value +
            "\npassword: " + password.value
        );
    }

});