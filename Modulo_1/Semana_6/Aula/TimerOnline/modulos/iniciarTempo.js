import {displayDoTempo} from './seletores.js';

let tempoRestante = 5*60;
export let intervalo;

const iniciarTempo = () => {
    intervalo = setInterval(() => {    
        if (tempoRestante > 0) {
        --tempoRestante;
        let min =  parseInt(tempoRestante / 60) > 9 ? 
        parseInt(tempoRestante / 60) : 
        "0"+ parseInt(tempoRestante / 60);

        let seg = tempoRestante % 60 > 9 ? 
        tempoRestante % 60 : 
        "0" + tempoRestante % 60;

        displayDoTempo.innerText = min + ":" + seg;
    }
    },1000)
};

export default iniciarTempo;

