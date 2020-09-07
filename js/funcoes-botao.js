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

// Código 1: Esse algoritmo irá retornar ao usuário um popup com a mensagem abaixo após clicar no botão.
function botao(){
    alert("Esse é o resultado do código 1 do arquivo funcoes-botao.js");
}

// Código 2: Esse algoritmo irá retornar ao usuário uma mensagem abaixo do botão após ser clicado.
/*function botao(){
    document.getElementById("mensagem").innerHTML = "Esse é o resultado do código 2 do arquivo funcoes-botao.js";   // Você pode colocar tags de HTML dentro da mensagem. Por exemplo "<u>sua mensagem aqui</u>" irá colocar a mensagem em underline. 
}
*/

// Código 3: Esse algoritmo irá retornar ao usuário uma mensagem abaixo do botão após ser clicado. O usuário será orientado a clicar na mensagem que o encaminhará para outra página em OUTRA aba.
/*function botao(){
    document.getElementById("mensagem2").innerHTML = "Clique <b><u>AQUI</u></b> para ser redirecionado para o Google";
}

function redirecionar(){
    window.open("https://www.google.com/"); 
}
*/

// Código 4: Esse algoritmo irá retornar o mesmo resultado que o código 3, onde o usuário será encaminhado para outra página, MAS dentro da MESMA aba do navegador que o usuário está.
/*function botao(){
    document.getElementById("mensagem2").innerHTML = "Clique <b><u>AQUI</u></b> para ser redirecionado para o Google";
}

function redirecionar(){
    window.location.href = "https://www.google.com/"; 
*/

// Código 5: Esse algoritmo resultará em uma mensagem abaixo do botão e um alerta ao passar o mouse sobre essa mensagem
/*function botao(){
    document.getElementById("mensagem3").innerHTML = "Passe o mouse <b><u>AQUI</u></b> para receber uma mensagem";
}

function alertar(){
    alert("Parabéns! Você está indo muio bem")
}
*/

// Código 6: Esse algoritmo resultará em uma mensagem abaixo do botão e um alerta ao passar o mouse sobre essa mensagem
/*function botao(){
    document.getElementById("mensagem4").innerHTML = "Passe o mouse <b><u>AQUI</u></b> para ver essa mensagem sendo trocada por outra";
}

function trocar(){
    document.getElementById("mensagem4").innerHTML = "Excelente! Agora você aprendeu que é possível trocar um texto por outro apenas passando o mouse sobre ele";
}
*/

// Código 7: Esse algoritmo resultará em uma mensagem abaixo do botão. Ao passar o mouse sobre a mensagem, ela troca por outra. Ao mover o mouse para fora da mensagem, ela retorna a mensagem inicial.
/*function botao(){
    document.getElementById("mensagem5").innerHTML = "Passe o mouse <b><u>AQUI</u></b>";
}

function trocar(){
    document.getElementById("mensagem5").innerHTML = "Ótimo! Agora afaste o mouse desta mensagem para retornar a mensagem inicial";
}

function voltar(){
    document.getElementById("mensagem5").innerHTML = ""Passe o mouse <b><u>AQUI</u></b>";
}
*/

// Código 8: Esse algoritmo resultará em uma mensagem abaixo do botão e um alerta ao passar o mouse sobre essa mensagem
/*function botao(){
    document.getElementById("mensagem6").innerHTML = "Passe o mouse <b><u>AQUI</u></b>";
    document.getElementById("mensagem7").innerHTML = "Passe o mouse <b><u>AQUI</u></b>"
}

function trocar(elemento){
    elemento.innerHTML = "Ótimo! Agora afaste o mouse desta mensagem para retornar a mensagem inicial";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse <b><u>AQUI</u></b>";
}
*/

// Código 9: Esse algoritmo resultará em uma mensagem abaixo do botão. Ao clicar o botão, o usuário receberá uma mensagem solicitando que ele faça a escolkha de uma fruta na lista abaixo. Ao escolher a fruta, um alerta será mostrado ao usuário.
/*function carregar(){
    alert("Aperte o botão para instruções")
}

function botao(){
    document.getElementById("mensagem").innerHTML = "Selecione uma fruta abaixo";
}

function funcaoChange(elemento){
    alert("Você escolheu a fruta " + elemento.value)
}
*/