var statusLampada = false;
var flagPrimeiroCarregamento = true;

LigaDesliga();

function LigaDesliga() {
    var statusLampadaGuardado = localStorage.getItem("status");
    var statusLampadaGuardado = statusLampadaGuardado == "true"; 
    statusLampada = statusLampadaGuardado;

    if (!flagPrimeiroCarregamento) {
        statusLampada = !statusLampada;
    } 

    if(statusLampada) {
        document.getElementById("imagemLampada").src = "./luz-acesa.png"; 
        document.getElementById("interruptor").innerText = "Desligar";
    } else {
        document.getElementById("imagemLampada").src = "./luz-apagada.png";
        document.getElementById("interruptor").innerText = "Ligar";
    }

    flagPrimeiroCarregamento = false;

    localStorage.setItem("status", statusLampada);
}
