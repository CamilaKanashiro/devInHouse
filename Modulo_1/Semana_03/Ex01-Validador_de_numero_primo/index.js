function recebeNumero(){
    var numero = document.getElementById("numero").value;
    
    var numeroValidado = validaNumeroPrimo(numero);
    
    document.getElementById("resultado").innerText = numeroValidado;
    console.log(numeroValidado);
}

function validaNumeroPrimo(numero){

    numero = parseFloat(numero);

    if (numero <= 1) {
        return "O número digitado não é um número primo.";
    } else if(numero == 2 || numero == 3 || numero == 5 || numero == 7){
        return "O número digitado é um número primo.";
    } else if(numero % 2 == 0 || numero % 3 == 0 || numero % 5 == 0 || numero % 7 == 0) {
        return "O número digitado não é um número primo.";
    } else {
        return "O número digitado é um número primo.";
    }
}