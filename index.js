const button = document.querySelector("button");
const inputs = document.querySelectorAll("input");

button.addEventListener("click", () => {

    const username = inputs[0].value.trim();
    const password = inputs[1].value.trim();

    if(username === "" || password === ""){
        alert("Veuillez remplir tous les champs");
    }
    else if(password.length < 6){
        alert("Le mot de passe doit contenir au moins 6 caractères");
    }
    else{
        alert("Connexion réussie !");
    }

});