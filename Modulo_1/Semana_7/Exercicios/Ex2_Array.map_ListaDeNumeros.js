/* Dado o seguinte array, crie um novo array utilizando o método Array.map, 
onde cada valor seja igual à multiplicação do valor da lista original pelo seu antecessor.
Ex:
	arrayOriginal: [ 2, 4, 6, 8 ]  -> arrayResultado: [ 2, 8, 24, 48 ]

Lista: [ 3, 5, 7, 9, 11, 13 ] */

 const lista = [ 3, 5, 7, 9, 11, 13 ];

 const listaMultiplicada = lista.map((numero, index) => {
    if (index > 0) { 
        return numero*lista[index-1];
    } else {
        return numero;
    };
 });
 console.log(listaMultiplicada);
