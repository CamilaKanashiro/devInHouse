var fundo = document.getElementsByTagName("body")[0];

function sortear(){
    var numeros = [];

    for (i=0; i<1000; i++) {
        numeros.push(Math.floor(Math.random() * (1001 - 1) + 1));
    }

    escolherBackground (numeros)
}

function escolherBackground(numeros){
    var cem = 0;
    var superiores = 0;

    for (i=0; i<1000; i++) {
        if (numeros[i] == 100) {
            cem += 1;
        } else if (numeros[i] > 500) {
            superiores += 1;
        }
    }

    if (cem == 1) {
        fundo.style.background = "orange";
    } else if (cem > 1) {
        fundo.style.background = "black";
    } else {
        if (superiores > 500) {
            fundo.style.background = "url(https://picsum.photos/200/300)";
        } else {
            fundo.style.background = "url(https://via.placeholder.com/500)";
        }
    }
}



