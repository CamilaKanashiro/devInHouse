var btn = document.getElementById("btnAdicionar");
btn.addEventListener("click", AdicionarDados);

var btn = document.getElementById("btnSalvar");
btn.addEventListener("click", salvarDados);

var dados = [];

function carregarDados() {
    var objetoArmazenado = localStorage.getItem("dadosArmazenados");
    var objetoRecuperado = JSON.parse(objetoArmazenado);

    for (var elemento = 0; elemento < objetoRecuperado.length ; elemento++) {
        dados.push(objetoRecuperado[elemento]);
        preencheTable(objetoRecuperado[elemento]);
    }
}

function AdicionarDados() {
    var novoDado = new Object();
    novoDado.nome = document.getElementById("nome").value;
    novoDado.sobrenome = document.getElementById("sobrenome").value;
    novoDado.email = document.getElementById("email").value;
    novoDado.telefone = document.getElementById("telefone").value;
    novoDado.rua = document.getElementById("rua").value;
    novoDado.numeroRua = document.getElementById("numeroRua").value;
    novoDado.bairro = document.getElementById("bairro").value;
    novoDado.cep = document.getElementById("CEP").value;

    var dadosPreenchidos = document.getElementsByTagName("input");
    console.log(dadosPreenchidos);
    var dadosNaoPreenchidos = ""

    for (var elemento = 0; elemento < dadosPreenchidos.length; elemento++) {
        if (dadosPreenchidos[elemento].value == ""){
            dadosNaoPreenchidos = "falta preencher";
        }
        console.log(dadosPreenchidos[elemento].value);
    }

    if (dadosNaoPreenchidos == "falta preencher"){
        window.alert("Por favor, preencha todos os dados.")
    } else {
        dados.push(novoDado);
        preencheTable(novoDado);
        document.getElementById("nome").value = "";
        document.getElementById("sobrenome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("telefone").value = "";
        document.getElementById("rua").value = "";
        document.getElementById("numeroRua").value = "";
        document.getElementById("bairro").value = "";
        document.getElementById("CEP").value = "";
    }
}
        
function preencheTable(lista){
    var tabela = document.getElementById("tabela");

    var tr = document.createElement("tr");   
    var tdNome = document.createElement("td");  
    var tdSobrenome = document.createElement("td");  
    var tdEmail = document.createElement("td");  
    var tdTelefone = document.createElement("td");  
    var tdRua = document.createElement("td");  
    var tdNumeroRua = document.createElement("td");  
    var tdBairro = document.createElement("td");  
    var tdCep = document.createElement("td");
    
    tr.appendChild(tdNome);
    tr.appendChild(tdSobrenome);
    tr.appendChild(tdEmail);
    tr.appendChild(tdTelefone);
    tr.appendChild(tdRua);
    tr.appendChild(tdNumeroRua);
    tr.appendChild(tdBairro);
    tr.appendChild(tdCep);

    tdNome.textContent = lista.nome;
    tdSobrenome.textContent = lista.sobrenome;
    tdEmail.textContent = lista.email;
    tdTelefone.textContent = lista.telefone;
    tdRua.textContent = lista.rua;
    tdNumeroRua.textContent = lista.numeroRua;
    tdBairro.textContent = lista.bairro;
    tdCep.textContent = lista.cep;

    tabela.appendChild(tr);
};

function salvarDados() {
    var objetoParaArmazenar = JSON.stringify(dados);
    localStorage.setItem("dadosArmazenados", objetoParaArmazenar);
}