/* Usando o array resultante do exercício 3,utilize o método filter 
para criar um novo array com os clientes com idade acima de 25 anos. */

const listaClientesAtivos = [
  { id: 1, cliente: 'João Celso de Souza', idade: 33, ativo: true },
  { id: 2, cliente: 'Claudia Cipriano', idade: 28, ativo: true },
  { id: 3, cliente: 'Edilene Souza Silva', idade: 41, ativo: true },
  { id: 4, cliente: 'Maurício Gomes', idade: 17, ativo: true },
  { id: 5, cliente: 'Claudia Cipriano', idade: 22, ativo: true }
]

console.log (listaClientesAtivos);

const clientesAcima25Anos = listaClientesAtivos.filter(clientes => clientes.idade > 25);

console.log(clientesAcima25Anos);