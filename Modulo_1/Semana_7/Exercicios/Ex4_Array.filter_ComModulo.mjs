/* Usando o array resultante do exercício 3,utilize o método filter 
para criar um novo array com os clientes com idade acima de 25 anos. */

import clientesAtivos from './modulo_Ex3_Array.map_ListaDeObjetos.mjs'

console.log(clientesAtivos);

const clientesAcima25Anos = clientesAtivos.filter(clientes => clientes.idade > 25);

console.log(clientesAcima25Anos);

