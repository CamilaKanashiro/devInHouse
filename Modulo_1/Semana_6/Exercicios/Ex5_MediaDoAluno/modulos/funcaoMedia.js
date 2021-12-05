import { nota_1, nota_2, nota_3, mostrarResultado } from './seletores.js';

const funcaoMedia = () => {
    const nota1 = parseFloat(nota_1.value);
    const nota2 = parseFloat(nota_2.value);
    const nota3 = parseFloat(nota_3.value);

    const result = ((nota1 + nota2 + nota3) / 3).toFixed(2); 

    mostrarResultado.innerText = result;
}

export default funcaoMedia;