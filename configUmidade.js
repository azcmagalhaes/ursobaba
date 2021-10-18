function fazGet(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

var umidade_ambiente = document.getElementById("umidade_ambiente");
function getUmidade(){
    let data = fazGet("http://blynk-cloud.com/UOkDPhjPX45piUnTtMbQMKjpZiPx-_D0/get/V6");
    let umidade = JSON.parse(data);
    console.log("umidade"+umidade[0]);
    umidade_ambiente.innerText = umidade[0] + "%";
}

getUmidade()