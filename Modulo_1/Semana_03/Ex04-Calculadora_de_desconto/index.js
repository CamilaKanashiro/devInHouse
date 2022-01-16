document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault();
    
    var valorTotal = document.getElementById("total").value;
    var desconto = document.getElementById("desconto").value;

    if (valorTotal != '' && desconto != '') {
        if (valorTotal > 0 && desconto >= 0 && desconto <= 100) {
            var valorDoDesconto = parseFloat(valorTotal) * parseFloat(desconto)/100;
            var valorComDesconto = parseFloat(valorTotal) - valorDoDesconto;

            document.getElementsByTagName("span")[0].innerHTML = `<p> Valor total: R$ ${valorTotal} </p>
                                                            <p> <b>Valor com desconto: R$ ${valorComDesconto}</b></p>
                                                            <p> Valor do desconto: R$ ${valorDoDesconto}</p>`;

            document.getElementById("total").value = "";
            document.getElementById("desconto").value = "";

        } else {
            document.getElementsByTagName("span")[0].innerHTML = "<p>Não são permitidos valores negativos e o desconto tem que estar em porcentagem (0% a 100%).</p>"
        }
    }
})