function fazGet(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

var temperatura_ambiente = document.getElementById("temperatura_ambiente");
var status_temperatura_ambiente = document.getElementById("status_temperatura_ambiente");
function getTemperatura(){
    let data = fazGet("http://blynk-cloud.com/UOkDPhjPX45piUnTtMbQMKjpZiPx-_D0/get/V5");
    let temperatura = JSON.parse(data);
    console.log(temperatura[0]);
    temperatura_ambiente.innerText = temperatura + "°C";
    if(temperatura < 17){
        status_temperatura_ambiente.innerText = "Temperatura está baixa";
    }
    else if(temperatura > 27){
        status_temperatura_ambiente.innerText = "Temperatura está elevada";
    }
    else{
        status_temperatura_ambiente.innerText = "Temperatura está estável";
    }
}

var temperatura_crianca = document.getElementById("temperatura");
var status_temperatura_crianca = document.getElementById("status_temperatura");
function getTemperaturaCrianca(){
    let data = fazGet("http://blynk-cloud.com/UOkDPhjPX45piUnTtMbQMKjpZiPx-_D0/get/V10");
    console.log("error: "+data)
    if(data == "Requested pin doesn't exist in the app."){
        temperatura_crianca.innerText = "ERRO";
    }
    else{
        let temperatura = JSON.parse(data);
        console.log(temperatura[0]);
        temperatura_crianca.innerText = temperatura + "°C";
        if(temperatura >= 38){
            status_temperatura_crianca.innerText = "Temperatura elevada";
        }
        else if(temperatura <= 0){
            status_temperatura_crianca.innerText = "Temperatura baixa";
        }
        else{
            status_temperatura_crianca.innerText = "Temperatura normal";
        }
    }
}

function getFeedbackTemp(){
    let data = fazGet("http://blynk-cloud.com/UOkDPhjPX45piUnTtMbQMKjpZiPx-_D0/get/V27");
    let data2 = fazGet("http://blynk-cloud.com/UOkDPhjPX45piUnTtMbQMKjpZiPx-_D0/get/V28");
    console.log(data+" "+data2)
}

getTemperaturaCrianca()
getTemperatura()
getFeedbackTemp()