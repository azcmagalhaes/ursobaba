firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, "+user.email
    }
})

var luminosidade = document.getElementById("luminosidade");
var lumFirebase = firebase.database().ref('luminosidade/');
lumFirebase.on('value', (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    luminosidade.innerText = "A luminosidade do ambiente é: " + data;
});


function mudarLuminosidade(){
    var inputLuminosidade = document.getElementById("inputMudarLuminosidade").value;
    var newPostKey = firebase.database().ref().child('luminosidade').push().key;
    console.log(newPostKey + " " + inputLuminosidade);
    var updates = {};
    updates['/luminosidade/'] = inputLuminosidade;
    return firebase.database().ref().update(updates);
}

var temperatura = document.getElementById("temperatura");
var tempFirebase = firebase.database().ref('temperatura/');
tempFirebase.on('value', (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    temperatura.innerText = "A temperatura da criança é: " + data;
});

var temperatura_ambiente = document.getElementById("temperatura_ambiente");
var tempAmbFirebase = firebase.database().ref('temperatura_ambiente/');
tempAmbFirebase.on('value', (snapshot) => {
    const data = snapshot.val();
    console.log("temperatura_ambiente "+data);
    temperatura_ambiente.innerText = "A temperatura ambiente é: " + data;
});

function mudarTemperatura(){
    var inputTemperatura = document.getElementById("inputMudarTemperatura").value;
    var newPostKey = firebase.database().ref().child('temperatura_ambiente').push().key;
    console.log(newPostKey + " " + inputTemperatura);
    var updates = {};
    updates['/temperatura_ambiente/'] = inputTemperatura;
    return firebase.database().ref().update(updates);
}

var oxigenacao = document.getElementById("oxigenacao");
var oxiFirebase = firebase.database().ref('oxigenacao/');
oxiFirebase.on('value', (snapshot) => {
    const data = snapshot.val();
    console.log(data);
    oxigenacao.innerText = "A oxigenação da criança é: " + data;
});

function logout(){
    firebase.auth().signOut()
}