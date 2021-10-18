function fazGet(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

var bpm_crianca = document.getElementById("bpm");
var status_bpm_crianca = document.getElementById("status_bpm");
function getBPMCrianca(){
    let data = fazGet("http://blynk-cloud.com/UOkDPhjPX45piUnTtMbQMKjpZiPx-_D0/get/V8");
    let bpm = JSON.parse(data);
    console.log(bpm[0]);
    bpm_crianca.innerText = bpm + "bpm";
    if( bpm >= 140 ){
        status_bpm_crianca.innerText = "Taquicardia";
    }
    else if( bpm >= 80 ){
        status_bpm_crianca.innerText = "Normal";
    }
    else{
        status_bpm_crianca.innerText = "Bradicardia";
    }
}

getBPMCrianca()