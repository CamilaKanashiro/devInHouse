/* FORMA SIMPLES
function validaNumeroPar(){
    
    var numeroDigitado = document.getElementById("numero").value;

    if(numeroDigitado != "" && numeroDigitado != 0) {
        var resto = numeroDigitado % 2;

        if (resto == 0) {
            document.getElementById("resultado").innerHTML = "O número digitado é um número par."
        } else {
            document.getElementById("resultado").innerHTML = "O número digitado é um número ímpar."
        }
    }
}*/

var resultado = document.getElementById("resultado");

function enviaValor() {
    var numeroDigitado = document.getElementById("numero").value;

    if (numeroDigitado != "" && numeroDigitado != 0) {
        numeroDigitado = parseInt(numeroDigitado)

        if(numeroDigitado < 0) {
            resultado.innerHTML = "O número não pode ser negativo"
            document.getElementById("numero").value = "";
            return;
        }
        if (numeroImparPar(numeroDigitado) === 1) {
            resultado.innerHTML = "O número digitado é um número par."
        } else if (numeroImparPar(numeroDigitado) === 2){
            resultado.innerHTML = "O número digitado é um número ímpar."
        } else if (numeroImparPar(numeroDigitado) === 3) {
            resultado.innerHTML = "O número digitado é inválido."
        }   
    }
}

function numeroImparPar(numero) {

    if (typeof numero === 'number') {
        var resto =  numero % 2;

        if (resto == 0) {
            return 1;
        } else {
            return 2;
        }    
    } else {
        return 3;
    }
}