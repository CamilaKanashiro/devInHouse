var valorCalculado = 0;

function NovaAdicao() {
    var valorInput = document.getElementById("input").value;

    if (valorInput.includes("+") || valorInput.includes("-") || valorInput.includes("*") || valorInput.includes("/")) {
        valorCalculado = Calcular(valorInput);
        document.getElementById("input").value = valorCalculado + " + "; 
    } else {
        document.getElementById("input").value = valorInput + " + "; 
    }
    document.getElementById("input").focus();
}

function NovaSubtracao() {
    var valorInput = document.getElementById("input").value;

    if (valorInput.includes("+") || valorInput.includes("-") || valorInput.includes("*") || valorInput.includes("/")) {
        valorCalculado = Calcular(valorInput);
        document.getElementById("input").value = valorCalculado + " - "; 
    } else {
        document.getElementById("input").value = valorInput + " - "; 
    }
    document.getElementById("input").focus();
}

function NovaMultiplicacao() {
    var valorInput = document.getElementById("input").value;

    if (valorInput.includes("+") || valorInput.includes("-") || valorInput.includes("*") || valorInput.includes("/")) {
        valorCalculado = Calcular(valorInput);
        document.getElementById("input").value = valorCalculado + " * "; 
    } else {
        document.getElementById("input").value = valorInput + " * "; 
    }
    document.getElementById("input").focus();
}

function NovaDivisao() {
    var valorInput = document.getElementById("input").value;

    if (valorInput.includes("+") || valorInput.includes("-") || valorInput.includes("*") || valorInput.includes("/")) {
        valorCalculado = Calcular(valorInput);
        document.getElementById("input").value = valorCalculado + " / "; 
    } else {
        document.getElementById("input").value = valorInput + " / "; 
    }
    document.getElementById("input").focus();
}

function Calcular(valorInput) {
    [numero1, operador, numero2] = SepararValores(valorInput);

    if (numero2 != "") {
        if (operador == "+") {
            return numero1 + parseFloat(numero2);
        } else if (operador == "-") {
            return numero1 - parseFloat(numero2);  
        } else if (operador == "*") {
            return numero1 * parseFloat(numero2);
        } else {
            return numero1 / parseFloat(numero2);
        }
    } else {
        return numero1;
    }
}

function SepararValores(valorInput) {
    var elementos = valorInput.split(' ');
    console.log(elementos);

    return [parseFloat(elementos[0]), elementos[1], elementos[2]];
}