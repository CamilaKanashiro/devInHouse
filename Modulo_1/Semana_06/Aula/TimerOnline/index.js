// import { intervalo } from "./modulos/iniciarTempo.js"
import pararTimer from "./modulos/pararTempo.js";
import iniciarTempo from "./modulos/iniciarTempo.js";
import { botaoIniciarTimer, botaoPararTimer } from "./modulos/seletores.js"


botaoIniciarTimer.addEventListener('click', iniciarTempo);

botaoPararTimer.addEventListener('click', pararTimer);