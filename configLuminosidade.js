function liga_lamp(){
    document.getElementById("liga_lamp").style.display = "none";
    document.getElementById("desliga_lamp").style.display = "block";
    document.getElementById("inputMudarLuminosidade").style.display = "block";
    document.getElementById("labelMudarLuminosidade").style.display = "block";
}

function desliga_lamp(){
    document.getElementById("liga_lamp").style.display = "block";
    document.getElementById("desliga_lamp").style.display = "none";
    document.getElementById("inputMudarLuminosidade").style.display = "none";
    document.getElementById("labelMudarLuminosidade").style.display = "none";
    let url = "http://blynk-cloud.com/UOkDPhjPX45piUnTtMbQMKjpZiPx-_D0/update/V1?value=11"
    console.log(url)
    request.open("PUT", url, false);
    request.send();
}

var slider = document.getElementById("inputMudarLuminosidade");
var output = document.getElementById("labelMudarLuminosidade");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
    let url = "http://blynk-cloud.com/UOkDPhjPX45piUnTtMbQMKjpZiPx-_D0/update/V1?value="+this.value
    console.log(url)
    request.open("PUT", url, false);
    request.send();
}

function fazGet(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

var luminosidade = document.getElementById("luminosidade");
function getLuminosidade(){
    let data = fazGet("http://blynk-cloud.com/UOkDPhjPX45piUnTtMbQMKjpZiPx-_D0/get/V7");
    let luminosidade_ambiente = JSON.parse(data);
    console.log(luminosidade[0]);
    if(luminosidade_ambiente[0]<=4){
        luminosidade.innerText = "A luminosidade do ambiente é de 100%";
        console.log("entrei aqui")
    }
    else if(luminosidade_ambiente[0]==5){
        luminosidade.innerText = "A luminosidade do ambiente é de 70%";
    }
    else if(luminosidade_ambiente[0]==6){
        luminosidade.innerText = "A luminosidade do ambiente é de 64%";
    }
    else if(luminosidade_ambiente[0]==7){
        luminosidade.innerText = "A luminosidade do ambiente é de 50%";
    }
    else if(luminosidade_ambiente[0]==8){
        luminosidade.innerText = "A luminosidade do ambiente é de 40%";
    }
    else if(luminosidade_ambiente[0]==9){
        luminosidade.innerText = "A luminosidade do ambiente é de 20%";
    }
    else if(luminosidade_ambiente[0]==10){
        luminosidade.innerText = "A luminosidade do ambiente é de 10%";
    }
    else{
        luminosidade.innerText = "A lampada está desligada";
    }
}

getLuminosidade()