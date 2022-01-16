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
    return a.localeCompare(b)
}) //organizando em ordem alfabética primeiro

lista.sort((a,b) => {
    var x = a.length;
    var y = b.length;
    return x == y ? 0 : x > y ? 1 : -1;
})

for (elemento of lista) {
    body.insertAdjacentHTML("beforeend", `<div> ${elemento} </div>`);
}

