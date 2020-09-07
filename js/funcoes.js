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

// Código 1: Esse algoritmo irá retornar ao usuário o resultado de uma função matemática
function soma(n1, n2){
    return n1 + n2;
}
alert("A soma de 5 + 10 é igual a " + soma(5,10));

/* Código 2: Esse algoritmo irá trocar uma informação no popup do usuário
function setReplace(frase, pais, novoPais){
    return frase.replace(pais, novoPais);
}
alert(setReplace("Vai Japão!", "Japão", "Brasil"));
*/

//Código 3: Esse algoritmo irá validar a idade através de uma FUNÇÃO TRUE FALSE com variável local
/*function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = "Você é MAIOR de idade";
    }else{
        validar = "Você é MENOR de idade";
    }
//    return validar;   // Retire o // da frente do "return validar" e coloque // na frente de "alert(validar);" e o resultado aparece no console do navegador
    alert(validar);
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
*/

//Código 4: Esse algoritmo irá validar a idade através de uma FUNÇÃO TRUE FALSE com variável global
/*var validar = 0;

function validaIdade(idade){
    if(idade >= 18){
        validar = "Você é MAIOR de idade";
    }else{
        validar = "Você é MENOR de idade";
    }
//    return validar;   // Retire o // da frente do "return validar" e coloque // na frente de "alert(validar);" e o resultado aparece no console do navegador
    alert(validar);
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
*/