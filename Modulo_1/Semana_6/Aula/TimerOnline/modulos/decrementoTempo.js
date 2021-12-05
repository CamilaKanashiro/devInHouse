import {displayDoTempo} from './seletores.js';

let tempoRestante = 5*60;



function decrementoTempo () {
    if (tempoRestante > 0) {
        --tempoRestante;
        let min =  parseInt(tempoRestante / 60) > 9 ? 
        parseInt(tempoRestante / 60) : 
        "0"+ parseInt(tempoRestante / 60);

        let seg = tempoRestante % 60 > 9 ? 
        tempoRestante % 60 : 
        "0" + tempoRestante % 60;

        displayDoTempo.innerText = min + ":" + seg;
        console.log(tempoRestante);
    }
};

let tempo = setInterval(decrementoTempo,1000);

export default tempo;  