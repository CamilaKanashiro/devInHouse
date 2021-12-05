import tempo from "./modulos/decrementoTempo.js"
import { botaoIniciarTimer, botaoPararTimer } from "./modulos/seletores.js"


botaoIniciarTimer.addEventListener('click', () => {tempo});

botaoPararTimer.addEventListener('click', () => {
    clearInterval(tempo);
})