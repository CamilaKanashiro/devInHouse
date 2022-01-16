
apresentarDados();

function apresentarDados() {
    const dadosNoLocalStorage = JSON.parse(localStorage.getItem('enderecosCadastrados'));
    
    if (dadosNoLocalStorage){
        const enderecosClientesNoLocalStorage = dadosNoLocalStorage.enderecosClientes;
        const enderecosLojasNoLocalStorage = dadosNoLocalStorage.enderecosLojas;
        const enderecosMercadosNoLocalStorage = dadosNoLocalStorage.enderecosMercados;
        
        const tabelaClientesBody = document.getElementById("table-clientes-body");
        const tabelaLojasBody = document.getElementById("table-lojas-body");
        const tabelaMercadosBody = document.getElementById("table-mercados-body");

        for (let endereco of enderecosClientesNoLocalStorage) {
            let linhaCompleta = construirLinhaTabela(endereco);
            tabelaClientesBody.appendChild(linhaCompleta);
        } 

        for (let endereco of enderecosLojasNoLocalStorage) {
            let linhaCompleta = construirLinhaTabela(endereco);
            tabelaLojasBody.appendChild(linhaCompleta);
        } 

        for (let endereco of enderecosMercadosNoLocalStorage) {
            let linhaCompleta = construirLinhaTabela(endereco);
            tabelaMercadosBody.appendChild(linhaCompleta);
        } 
    }
}

function construirLinhaTabela(endereco) {

    const linha = document.createElement("tr");    
    
    const elementosDaLinha = `<td>${endereco.logradouro}</td>
                            <td>${endereco.numero}</td>
                            <td>${endereco.cidade}</td>
                            <td>${endereco.estado}</td>
                            <td>${endereco.pais}</td>
                            <td>${endereco.cep}</td>`;
    
    linha.innerHTML = elementosDaLinha;

    return linha;
}