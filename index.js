const signupBtn = document.getElementById("signupBtn");

signupBtn.addEventListener("click", () => {

    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if(email === "" || username === "" || password === ""){
        alert("Veuillez remplir tous les champs");
    }

    else if(password.length < 6){
        alert("Le mot de passe doit contenir au moins 6 caractères");
    }

    else{
        alert("Compte créé avec succès !");
    }

});