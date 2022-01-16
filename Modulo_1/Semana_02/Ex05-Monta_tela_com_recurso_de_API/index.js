var numero = window.prompt("Digite um número de 1 a 10");

var body = document.getElementsByTagName("body")[0];


if(numero > 0 && numero <= 10){

}else{
    alert("número invalido, por padrão será escolhido o 5");
    numero = 5;
}

var sections = "";
for(var i = 1; i <= numero; i++){

    fetch("https://dog.ceo/api/breeds/image/random").then( function(data){
        return data.json();
    }).then(function(json){
        var resultado = json.message;
        var section = "<section style=\"background-image:url('"+resultado+"')\">dog</section>";
        body.insertAdjacentHTML("beforeend",section)

    })
    fetch("https://api.thecatapi.com/v1/images/search").then(function(data){
        return data.json();
    }).then(function(json){
        var resultado = json[0].url;
        var section = "<section style=\"background-image:url('"+resultado+"')\">cat</section>";
        body.insertAdjacentHTML("beforeend",section)
        
    })
}