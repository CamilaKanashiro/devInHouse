var body = document.getElementsByTagName("body")[0];
var palavra = ""
var lista = []

while (palavra != "parar") {
    palavra = (window.prompt("Digite uma palavra")).toLowerCase();

    if (palavra != "parar") {
        lista.push(palavra);  
    }
}

lista.sort((a,b) => {
    if (a.localeCompare(b) == 1 ) {
        return -1;
    } else if (a.localeCompare(b) == -1) {
        return 1;
    } else {
        return 0;
    }
})

for (elemento of lista) {
    body.insertAdjacentHTML("beforeend", `<div> ${elemento} </div>`);
}

