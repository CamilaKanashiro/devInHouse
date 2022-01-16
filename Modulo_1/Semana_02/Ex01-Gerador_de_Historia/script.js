var nome = window.prompt("Qual seu nome?");
var idade = window.prompt("Qual sua idade?");
var diaDaSemana = window.prompt("Qual seu dia da semana favorito?");
var esportePredileto = window.prompt("Qual seu esporte favorito?");
var alguemImportante = window.prompt("Digite o nome de alguém importante?");
var alguemAdmiravel = window.prompt("Digite o nome de alguém que você admira");


var string = "Hoje, "+ diaDaSemana + ", é um dia histórico. Todos os fãs de " + esportePredileto + " estão maravilhados com a proeza realizada pelo(a) atleta "
+ nome +". " + alguemImportante + " não conteve as lágrimas ao comentar sobre em uma entrevista e até o(a) " + alguemAdmiravel + " twittou “é muito bom ver alguém com "
+ idade + " anos demonstrando tanta habilidade”"

window.alert(string);