document.getElementById("interruptor").addEventListener("click", () => {
    var posicaoInterruptor = document.getElementById("interruptor").innerText;
    if (posicaoInterruptor == "Ligar") {
        document.getElementById("imagemLampada").src = "./luz-acesa.png"; 
        document.getElementById("interruptor").innerText = "Desligar";
    } else {
        document.getElementById("imagemLampada").src = "./luz-apagada.png";
        document.getElementById("interruptor").innerText = "Ligar";
    }
    
})