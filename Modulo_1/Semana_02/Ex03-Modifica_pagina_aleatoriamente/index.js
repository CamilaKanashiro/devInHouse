var corDeFundo = ["#000000","#1A1A1A","#1A3D4C"];

var corDosElementosSobrepostos= ["#E6E6E6","#CCCCCC","#0D2526"];

var corDoTexto = ["white","black"];

function start(){
    var corDeFundoEscolhida = corDeFundo[getRand(0,corDeFundo.length)];
    var corDosElementosSobrepostosEscolhida = corDosElementosSobrepostos[getRand(0,corDosElementosSobrepostos.length)];
    var corDoTextoEscolhida = corDoTexto[getRand(0,corDoTexto.length)];
    
    alteraOsEstilosDaPagina (corDeFundoEscolhida, corDosElementosSobrepostosEscolhida, corDoTextoEscolhida);
}

function getRand (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function alteraOsEstilosDaPagina(corDeFundoEscolhida, corDosElementosSobrepostosEscolhida, corDoTextoEscolhida) {
    var fundo = document.getElementsByTagName("body")[0];
    fundo.style.background = corDeFundoEscolhida;

    var sobreposto = document.getElementById("sobreposto");
    sobreposto.style.background = corDosElementosSobrepostosEscolhida;

    var texto= document.getElementsByClassName("texto")[0];
    texto.style.color = corDoTextoEscolhida;
}
