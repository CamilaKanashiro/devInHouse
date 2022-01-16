var idadeTotal = 0;

function participacao() {
    var nome = window.prompt("Digite seu nome") ;  
    var satisfacao = window.prompt("Digite um número de 1 a 10 para expressar sua satisfação");
    var idade = parseInt(window.prompt("Digite a sua idade"));
    var listaSatisfeitos = window.confirm("Podemos incluir você na lista de satisfeitos?");
    window.alert("Salvo com sucesso!");

    /*numeroParticipantes.innerText =+ numeroParticipantes.innerText + 1;     outra forma de fazer*/
    numeroParticipantes.innerText = parseInt(numeroParticipantes.innerText) + 1;

    idadeTotal = idadeTotal + idade;
    var idadeMedia = Math.round(idadeTotal / parseInt(numeroParticipantes.innerText));
    idadeParticipantes.innerText = idadeMedia;

    if (listaSatisfeitos == true) {
        /*numeroSatisfeitos.innerText =+ numeroSatisfeitos.innerText + 1;*/
        numeroSatisfeitos.innerText = parseInt(numeroSatisfeitos.innerText) + 1;
    }
}