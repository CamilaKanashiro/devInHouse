var textos = ["animal","carro","humano","prédio","cadeira","objeto"];

var body = document.getElementsByTagName("body")[0];

textos.sort((a,b) => {
    var x = a.length;
    var y = b.length;
    return x == y ? 0 : x > y ? -1 : 1;
});

for (elemento of textos) {
    var div = document.createElement("div");
    var elementoTexto = document.createTextNode(elemento);
    div.appendChild(elementoTexto);
    body.appendChild(div);
}
