import  { nota_1, nota_2, nota_3, botaoCalculaMedia } from './modulos/seletores.js';
import funcaoMedia from './modulos/funcaoMedia.js';

botaoCalculaMedia.addEventListener('click', () => {
    if (nota_1.value != "" && nota_2.value != "" && nota_3.value != ""){
        funcaoMedia();
        nota_1.value = "";
        nota_2.value = "";
        nota_3.value = "";
    } else {
        alert("Preencha todas as notas antes de calcular a média!");
    }
});

