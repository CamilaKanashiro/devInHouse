/* Dada a seguinte lista, utilizando o método forEach, imprima no console cada um dos elementos,
seguidos de seu índice, no formato "Índice - Nome”.

[ “Banana”, “Morango”, “Maçã”, “Uva”, “Pêra” ] */ 

const frutas = ["Banana", "Morango", "Maçã", "Uva", "Pêra"];

frutas.forEach((fruta, index) => {
    console.log(index + ' - ' + fruta)
});

