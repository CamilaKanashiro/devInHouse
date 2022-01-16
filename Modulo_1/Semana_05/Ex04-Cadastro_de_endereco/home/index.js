class Endereço {
    constructor (logradouro, numero, cidade, estado, pais, cep) {
        this.logradouro = logradouro;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
        this.pais = pais;
        this.cep = cep;
    }
}

class Cliente extends Endereço {
    constructor(logradouro, numero, cidade, estado, pais, cep) {
        super(logradouro, numero, cidade, estado, pais, cep);
        this.endereco = "cliente";
    }
}

class Loja extends Endereço {
    constructor(logradouro, numero, cidade, estado, pais, cep) {
        super(logradouro, numero, cidade, estado, pais, cep);
        this.endereco = "loja";
    }
}

class Mercado extends Endereço {
    constructor(logradouro, numero, cidade, estado, pais, cep) {
        super(logradouro, numero, cidade, estado, pais, cep);
        this.endereco = "mercado";
    }
}

function cadastrarCliente(){
    const logradouro = document.getElementById("logradouro-cliente").value;
    const numero = document.getElementById("numero-cliente").value;
    const cidade = document.getElementById("cidade-cliente").value;
    const estado = document.getElementById("estado-cliente").value;
    const pais = document.getElementById("pais-cliente").value;
    const cep = document.getElementById("cep-cliente").value;

    const enderecoNovo = new Cliente (logradouro, numero, cidade, estado, pais, cep);
    
    const enderecosASeremSalvoNoStorage = recuperarDadosDoLocalStorage();
    
    enderecosASeremSalvoNoStorage.enderecosClientes.push(enderecoNovo);
    
    localStorage.setItem('enderecosCadastrados', JSON.stringify(enderecosASeremSalvoNoStorage));

    document.getElementById("logradouro-cliente").value = "";
    document.getElementById("numero-cliente").value = "";
    document.getElementById("cidade-cliente").value = "";
    document.getElementById("estado-cliente").value = "";
    document.getElementById("pais-cliente").value = "";
    document.getElementById("cep-cliente").value = "";
}

function cadastrarLoja(){
    const logradouro = document.getElementById("logradouro-loja").value;
    const numero = document.getElementById("numero-loja").value;
    const cidade = document.getElementById("cidade-loja").value;
    const estado = document.getElementById("estado-loja").value;
    const pais = document.getElementById("pais-loja").value;
    const cep = document.getElementById("cep-loja").value;

    const enderecoNovo = new Loja (logradouro, numero, cidade, estado, pais, cep);
    
    const enderecosASeremSalvoNoStorage = recuperarDadosDoLocalStorage();
    
    enderecosASeremSalvoNoStorage.enderecosLojas.push(enderecoNovo);
    
    localStorage.setItem('enderecosCadastrados', JSON.stringify(enderecosASeremSalvoNoStorage));

    document.getElementById("logradouro-loja").value = "";
    document.getElementById("numero-loja").value = "";
    document.getElementById("cidade-loja").value = "";
    document.getElementById("estado-loja").value = "";
    document.getElementById("pais-loja").value = "";
    document.getElementById("cep-loja").value = "";
}

function cadastrarMercado(){
    const logradouro = document.getElementById("logradouro-mercado").value;
    const numero = document.getElementById("numero-mercado").value;
    const cidade = document.getElementById("cidade-mercado").value;
    const estado = document.getElementById("estado-mercado").value;
    const pais = document.getElementById("pais-mercado").value;
    const cep = document.getElementById("cep-mercado").value;

    const enderecoNovo = new Mercado (logradouro, numero, cidade, estado, pais, cep);
    
    const enderecosASeremSalvoNoStorage = recuperarDadosDoLocalStorage();
    
    enderecosASeremSalvoNoStorage.enderecosMercados.push(enderecoNovo);
    
    localStorage.setItem('enderecosCadastrados', JSON.stringify(enderecosASeremSalvoNoStorage));

    document.getElementById("logradouro-mercado").value = "";
    document.getElementById("numero-mercado").value = "";
    document.getElementById("cidade-mercado").value = "";
    document.getElementById("estado-mercado").value = "";
    document.getElementById("pais-mercado").value = "";
    document.getElementById("cep-mercado").value = "";
}

function recuperarDadosDoLocalStorage() {

    const enderecosASeremSalvoNoStorage = {
        enderecosClientes: [],
        enderecosLojas:[],
        enderecosMercados:[],
    }

    const dadosNoLocalStorage = JSON.parse(localStorage.getItem('enderecosCadastrados'));
    if (dadosNoLocalStorage){
        const enderecosClientesNoLocalStorage = dadosNoLocalStorage.enderecosClientes;
        const enderecosLojasNoLocalStorage = dadosNoLocalStorage.enderecosLojas;
        const enderecosMercadosNoLocalStorage = dadosNoLocalStorage.enderecosMercados;

        for (let endereco of enderecosClientesNoLocalStorage) {
            enderecosASeremSalvoNoStorage.enderecosClientes.push(endereco);
        } 

        for (let endereco of enderecosLojasNoLocalStorage) {
            enderecosASeremSalvoNoStorage.enderecosLojas.push(endereco);
        } 

        for (let endereco of enderecosMercadosNoLocalStorage) {
            enderecosASeremSalvoNoStorage.enderecosMercados.push(endereco);
        } 
    }

    return enderecosASeremSalvoNoStorage;
}