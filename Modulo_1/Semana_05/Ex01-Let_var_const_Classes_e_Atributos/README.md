Exercício fictício: estamos aumentando a equipe para desenvolver um Banco Digital (fintech) e alguns estagiários irão começar na semana que vem. Sendo assim, preciso que você escreva um documento 'readme.md' explicando o seguinte:

- Diferenças entra let, var e const;

- O que são classes, atributos e métodos, e o porque devemos utilizar.

Tente deixar tudo o mais resumido possível, assim podemos enviar para os novos integrantes. Vamos compartilhar nosso conhecimento. :D

- Diferenças entra let, var e const

Variáveis var têm escopo global, podem ser declaradas novamente e atualizadas. Seu uso permite sobrescrever uma variável de escopo superior a partir de um escopo menor. Para evitar problemas decorrentes disso, surgiram let e const.

As variáveis let podem ser atualizadas, mas não declaradas novamente no mesmo escopo. E, quando declarada dentro de um bloco, ainda que com o nome igual ao de uma variável let de escopo superior, não altera a variável do escopo maior, pois esta existe apenas dentro do bloco - isso é escopo de bloco.

As variáveis const (ou constantes), assim como as let, têm escopo de bloco. Entretanto, elas não podem ter seu valor alterado, não permitindo sobrescrever o valor de uma variável ou uma nova declaração da variável. Apesar disso, caso seja um objeto, suas propriedades podem ser alteradas.


- O que são classes, atributos e métodos, e o porque devemos utilizar.

Classes são estruturas que permitem a criação de diversos objetos com as mesmas propriedades. Dentro delas são definidos o estado e o comportamento do objeto através da implementação de atributos (variáveis) e métodos (funções).

Atributos são variáveis declaradas dentro do constructor. O constructor é um método que toda classe tem e que é chamado ao se criar uma instância da classe. Então, quando um novo objeto é criado são passados seus valores, através do método constructor, para que eles sejam atribuídos às suas variáveis.

Métodos são funções criadas dentro de uma classe. É possível criar funções que façam alguma ação qualquer desejada e existem métodos pré-definidos como set e get. Além disso, é possível criar métodos estáticos que são usados para implementar funções que pertencem à classe mas não aos objetos que ela cria.

O uso de classes permite maior organização do código que se está implementando. Ele permite o uso de encapsulamento (bloquear alteração de atributos), possibilita criar classes que herdam características de outras, permite criar polimorfismos - chamando o mesmo método em classes diferentes (uma classe derivada da outra) com respostas diferentes definidas pelo desenvolvedor.