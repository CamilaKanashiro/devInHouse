let valorCalculado = 0;

function NovaAdicao() {
    const valorInput = document.getElementById("input").value;

    if (valorInput.includes("+") || valorInput.includes("-") || valorInput.includes("*") || valorInput.includes("/")) {
        valorCalculado = Calcular(valorInput);
        document.getElementById("input").value = valorCalculado + " + "; 
    } else {
        document.getElementById("input").value = valorInput + " + "; 
    }
    document.getElementById("input").focus();
}

function NovaSubtracao() {
    const valorInput = document.getElementById("input").value;

    if (valorInput.includes("+") || valorInput.includes("-") || valorInput.includes("*") || valorInput.includes("/")) {
        valorCalculado = Calcular(valorInput);
        document.getElementById("input").value = valorCalculado + " - "; 
    } else {
        document.getElementById("input").value = valorInput + " - "; 
    }
    document.getElementById("input").focus();
}

function NovaMultiplicacao() {
    const valorInput = document.getElementById("input").value;

    if (valorInput.includes("+") || valorInput.includes("-") || valorInput.includes("*") || valorInput.includes("/")) {
        valorCalculado = Calcular(valorInput);
        document.getElementById("input").value = valorCalculado + " * "; 
    } else {
        document.getElementById("input").value = valorInput + " * "; 
    }
    document.getElementById("input").focus();
}

function NovaDivisao() {
    const valorInput = document.getElementById("input").value;

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
    const elementos = valorInput.split(' ');

    return [parseFloat(elementos[0]), elementos[1], elementos[2]];
}