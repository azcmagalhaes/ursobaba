document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
    console.log(medico+" paciente: "+paciente)
})

firebase.auth().onAuthStateChanged((user)=>{
    let paciente = document.getElementById("paciente").checked
    let medico = document.getElementById("medico").checked
    console.log(medico+" paciente: "+paciente)
    if(user){
        if(medico){
            location.replace("welcome_medico.html")
        }
        else if(paciente){
            location.replace("welcome_paciente.html")
        }
    }
})

function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    let paciente = document.getElementById("paciente").checked
    let medico = document.getElementById("medico").checked
    console.log(medico+" paciente: "+paciente)
    if(medico ^ paciente){
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                // ...
                alert('Usuario logado');
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage);
            });
    }
    else if(medico & paciente){
        alert("Selecione apenas uma modalidade")
    }
    else{
        alert("Selecione sua modalidade")
    }
}

function signUp(){
    location.replace("cadastro.html")
}

function forgotPass(){
    const email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        alert("Reset link sent to your email id")
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}
