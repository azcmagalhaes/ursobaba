let page = 0;

document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        if(page == 1){
            location.replace("welcome_medico.html")
        }
        else if(page == 2){
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
                if(medico) page = 1;
                else page = 2;
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
