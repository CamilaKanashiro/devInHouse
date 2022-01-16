var statusLampada = "apagada"

setInterval(() => {

    if (statusLampada == "apagada"){
        document.getElementById("imagemLampada").src = "./luz-acesa.png"; 
        statusLampada = "acesa"; 
    } else {
        document.getElementById("imagemLampada").src = "./luz-apagada.png";
        statusLampada = "apagada";
    }
}, 2000);