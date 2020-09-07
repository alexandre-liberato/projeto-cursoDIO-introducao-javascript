// LEIA AS INSTRUÇÕES DE USO ABAIXO PARA ENTENDER COMO UTILIZAR
//
// É necessário fazer alterações no código para ver o seu funcionamento no arquivo "index.html". Para isso:
//
// 1) Escolha qual código deseja ver funcionando (Código 1, Código 2, Código 3, Código 4, etc)
//
// 2) Verifique se o cóðigo escolhido inicia com /*. Se não tiver, significa que esse código está ativo
// e é esse código que está funcionando no arquivo "index.html"
//
// 3) Para que um código inativo funcione, é necessário colocar /* antes da palavra "Código" e */ após a
// última linha do código ATIVO e apagar o /* e o */ do código INATIVO.

// Código 1: IF-ELSE = Esse algoritmo emite um popup na tela do usuário pedindo que ele entre a idade, trazendo o resultado se ele é MAIOR ou MENOR de idade 
var idade = prompt("Qual a sua idade?");

if(idade >= 18){
    alert("Você é MAIOR de idade!");
}else{
    alert("Você é MENOR de idade!");
};

/* Código 2: WHILE = Esse algoritmo emite cinco popups sequencialmente na tela do usuário, contando de 0 a 5
var count = 0;

while (count <= 5){
    alert(count);
    count = count +1;   // Pode-se usar count++;
};
*/

/* Código 3: FOR = Esse algoritmo também emite cinco popups sequencialmente na tela do usuário, contando de 0 a 5
var count;

for(count = 0; count <= 5; count++){
    alert(count);
};
*/

/* Código 4: DATE = Esse algoritmo emite um popup com o dia e horário atual
var d = new Date();
alert(d);
*/

/* Código 5: DATE (específico) = Esse algoritmo emite um popup com o dia e horário atual
var d = new Date();
alert("Você pode ver as informações completas de data e horário")
alert(d);                                       // Traz a informação completa de data e horário
alert("Ou de forma separada")
alert("Hoje é dia " + d.getDay());              // Pode-se selecionar apenas o dia
alert("do mês " + d.getMonth());                // Pode-se selecionar apenas o mês
alert("de " + d.getFullYear());                 // Pode-se selecionar apenas o ano
alert("Agora são " + d.getHours() + " horas");  // Pode-se selecionar apenas as horas
alert("e " + d.getMinutes() + " minutos");      // Pode-se selecionar apenas os minutos
alert("e " + d.getSeconds() + " segundos");     // Pode-se selecionar apenas os segundos
*/