/* Crie uma arrow function que recebe um nome e sobrenome, e caso não receba nenhum parâmetro, 
tenha como valor pré-definido para o nome Jane e para o sobrenome Doe. */

const nomeSobrenome = (nome, sobrenome) => {
    return {
        'nome': nome ? nome : 'Jane',
        'sobrenome': sobrenome ? sobrenome : 'Doe'
    };
};

console.log(nomeSobrenome());
console.log(nomeSobrenome('Camila','Kanashiro'));
