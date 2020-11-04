// // Definição de variáveis
// var nome = "Elcio";
// var idade = 41;
// var idade2 = 10;
// var frase = "Japão é o melhor time do mundo";

// // alert - abre uma janela com alerta
// alert("Bem vindo " + nome);
// alert(nome + " tem " + idade + " anos");
// alert(idade + idade2);

// // console.log() - guarda o valor no log do console
// console.log(nome);
// console.log(idade + idade2);

// // Método .replace() substitui string por outra
// console.log(frase.replace("Japão", "Brasil"));
// // Método .toLowerCase() transforma todos os caracteres em minúsculo
// console.log(frase.toLowerCase());
// alert(frase.replace("do mundo", "da Ásia"));


// // Definição de lista (Array)
// var lista = ["maçã", "pera", "laranja"];
// // push - adiciona itens na lista
// lista.push("uva", "banana");
// // pop - remove último item da lista
// lista.pop();
// console.log(lista);

// // Atibuto .length retorna o tamano da lista
// console.log(lista.length);
// // Método .reverse() inverte a ordem da lista
// console.log(lista.reverse());
// // Método .toString() retorna uma string com os itens da lista
// console.log(lista.toString());
// // Método .join() retorna uma string concatenada com o separador que for definido
// console.log(lista.join("-"));

// // Definição de dicionário
// var fruta = {nome:"maçã", cor:"Vermelha"};
// console.log(fruta.nome);
// alert(fruta.cor);

// var frutas = [{nome:"abacaxi", cor:"Amarela"}, {nome:"uva", cor:"Roxa"}];
// console.log(frutas);
// console.log(frutas[0].nome);
// alert(frutas[1].cor);

// // Comando prompt abre uma janela para que seja possível atribuir
// // um valor a uma variável
// // Condicional if... else
// var idade = prompt("Qual sua idade? ");
// if (idade >= 18){
//     alert("Maior de idade")
// } else if (idade <18) {
//     alert("Menor de idade")
// }

// // Comando while
// var count = 0;
// while (count <= 5){
//     console.log(count);
//     alert(count);
//     count++;
// }

// // Comando for
// for(count=0; count <=5; count++){
//     console.log(count);
// }

// // Definindo variável do tipo data
// var d = new Date();
// alert(d);
// // O método .getMonth() inicia com o zero.
// // Logo sempre tem que somar 1 para retornar o valor correto
// alert(d.getMonth()+1);
// alert(d.getHours());
// alert(d.getMinutes());

// // Funções
// function soma(n1, n2){
//     return n1+n2;
// }

// function setReplace(frase, nome, novo_nome){
//     return frase.replace(nome, novo_nome);   
// }

// function validaIdade(idade){
//     var validar;
//     if (idade >= 18){
//         validar = true;
//     } else {
//         validar = false;
//     }
//     return validar;
// }

// var idade = prompt("Qual sua idade?")
// console.log(validaIdade(idade));

// alert(soma(5,10));
// alert(setReplace("Vai Japão", "Japão", "Brasil"));

function clicou(){
    // A função .getElementById() chama o elemento pelo ID e injeta
    // um elemento HTML neste ID.
    // <b> </b> coloca o elemento em negrito
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    // console.log(document.getElementById("agradecimento"));
    // alert("Obrigado por clicar");
}

function redirecionar(){
    // Abre o link em uma nova janela
    window.open("https://globallab.org");
    // Abre o link na mesma janela
    window.location.href = "https://globallab.org";
}

// Função somente para o elemento "mousemove"
function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    // alert("Trocar texto");
}
// Função somente para o elemento "mousemove"
function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    // alert("Trocar texto");
}

// Função para qualquer elemento
function trocar_generico(elemento){
    elemento.innerHTML="Obrigado por passar o mouse";
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    // alert("Trocar texto");
}
// Função para qualquer elemento
function voltar_generico(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    // alert("Trocar texto");
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}