document.getElementById("cadastroForm").addEventListener("submit",(event)=>{
    event.preventDefault()
    console.log(medico+" paciente: "+paciente)
})

function signUp(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    let paciente = document.getElementById("paciente").checked
    let medico = document.getElementById("medico").checked
    if(medico ^ paciente){
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
                alert('Usuario criado');
                location.replace("index.html")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                alert('Erro ao cadastrar');
            });
    }
    else if(medico & paciente){
        alert("Selecione apenas uma modalidade")
    }
    else{
        alert("Selecione sua modalidade")
    }
    
    
}

function backPage(){
    location.replace("index.html")
}