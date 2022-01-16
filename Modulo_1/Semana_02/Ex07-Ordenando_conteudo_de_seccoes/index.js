var textos = ["animal","carro","humano","prédio","cadeira","objeto"];

textos.sort();

var body = document.getElementsByTagName("body")[0];

for (var elemento of textos) {
    body.insertAdjacentHTML("beforeend", `<div> ${elemento} </div>`);
}
