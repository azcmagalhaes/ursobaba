function fazGet(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

var oxigenacao_crianca = document.getElementById("oxigenacao");
function getOxigenacaoCrianca(){
    let data = fazGet("http://blynk-cloud.com/UOkDPhjPX45piUnTtMbQMKjpZiPx-_D0/get/V9");
    let oxigenacao = JSON.parse(data);
    console.log("oxi"+oxigenacao[0]);
    oxigenacao_crianca.innerText = oxigenacao + "%";
}

getOxigenacaoCrianca()