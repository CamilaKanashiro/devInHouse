/* Dada a seguinte lista de clientes, crie uma nova lista onde cada um dos objetos 
tenha as propriedades do cliente mais a propriedade “ativo” com o valor booleano true.

Lista: [
	{ id: 1, cliente: “João Celso de Souza”, idade: 33 },
	{ id: 2, cliente: “Claudia Cipriano”, idade: 28 },
	{ id: 3, cliente: “Edilene Souza Silva”, idade: 41 },
	{ id: 4, cliente: “Maurício Gomes”. idade: 17 },
	{ id: 5, cliente: “Claudia Cipriano”, idade: 22 }
] */

const lista = [
	{ id: 1, cliente: "João Celso de Souza", idade: 33 },
	{ id: 2, cliente: "Claudia Cipriano", idade: 28 },
	{ id: 3, cliente: "Edilene Souza Silva", idade: 41 },
	{ id: 4, cliente: "Maurício Gomes", idade: 17 },
	{ id: 5, cliente: "Claudia Cipriano", idade: 22 }
];

const clientesAtivos = lista.map (usuario => {
    return {
        ...usuario,
        ativo: true
    }
})

console.log(lista);
console.log(clientesAtivos);
