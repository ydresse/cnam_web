// Vérifie le formulaire
$("#form_client").submit((event) => {

    if(!samePassword()){
        $("pwd").addClass("is-danger");
        $("pwd").addClass("is-danger");
        alert("Les mots de passe ne correspondent pas");
    }

    checkCp();
    checkTel();

    event.preventDefault();
})

function samePassword(){

    const password = $('#pwd').val();
    const confirm_password = $('#confirm_pwd').val();

    return (password === confirm_password);
}


function checkCp(){
    if($("#cp").val().length > 5){
        $("#cp").addClass("is-danger");
        $("#cp_help").append("Le code postal doit être inférieur à 5 chiffres");
    }
}

function checkTel(){
    if($("#tel").val().length !== 10){
        $("#tel").addClass("is-danger");
        $("#tel_help").append("Votre numéro de téléphone doit être de 10 chiffres");
    }
}
