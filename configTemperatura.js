function fazGet(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

var temperatura_ambiente = document.getElementById("temperatura_ambiente");
function getTemperatura(){
    let data = fazGet("http://blynk-cloud.com/UOkDPhjPX45piUnTtMbQMKjpZiPx-_D0/get/V5");
    let temperatura = JSON.parse(data);
    console.log(temperatura[0]);
    temperatura_ambiente.innerText = "A temperatura ambiente é: " + temperatura + "°C";
}

var temperatura_crianca = document.getElementById("temperatura");
function getTemperaturaCrianca(){
    let data = fazGet("http://blynk-cloud.com/UOkDPhjPX45piUnTtMbQMKjpZiPx-_D0/get/V10");
    console.log("error: "+data)
    if(data == "Requested pin doesn't exist in the app."){
        temperatura_crianca.innerText = "ERRO";
    }
    else{
        let temperatura = JSON.parse(data);
        console.log(temperatura[0]);
        temperatura_crianca.innerText = "A temperatura da criança é: " + temperatura + "°C";
    }
}

function getFeedbackTemp(){
    let data = fazGet("http://blynk-cloud.com/UOkDPhjPX45piUnTtMbQMKjpZiPx-_D0/get/V27");
    let data2 = fazGet("http://blynk-cloud.com/UOkDPhjPX45piUnTtMbQMKjpZiPx-_D0/get/V28");
    console.log(data+" "+data2)
}

getFeedbackTemp()
getTemperatura()
getTemperaturaCrianca()