
//-----------FUNÇÕES----------------------

//-----Exercícios de Interpretação de código-----

//ANTES DE TESTAR NO CONSOLE
 // 1. a. 10  50
//b. a função é invocada mas nada é impresso no console

//2. a. Essa função recebe um texto e modifica ele para letras minúsculas
//e procura se a palavra "cenoura" está contida no texto
// a utilidade dela é que você pode executar ela com multiplos
//textos sem precisar ficar escrevendo os métodos toda vez que
//receber um texto novo

//b. i."Eu gosto de cenoura" vira "eu gosto de cenoura" true
//ii."CENOURA é bom pra vista" vira "cenoura é bom pra vista" true
//iii."Cenouras crescem na terra" vira "cenouras crescem na terra" false 

// -----DEPOIS DE TESTAR NO CONSOLE------
// 2. a função só irá retornar true or false, pois o que realmente
//importa é saber se a palavra "cenoura" estará contida no texto
//todos os retornos serão true pois os texto irão ser modificado
// para Lower cases, até cenouras irão retornar um true
//pois o que importa é se "cenoura" está contida na string
//independente se estiver concatenada com outra palavra (cenouraoi)
//muito útil para procurar algo específico dentro de uma string


//----EXERCICIOS DE ESCRITA DE CÓDIGO-------

//1 a.
//     function imprimeTexto() {
//         console.log(`Eu sou a Myllena! Tenho 24 anos.
// Moro em Fortaleza e sou estudante.`)
//     }
// imprimeTexto()

//b.

// const seuNome = prompt("Qual é o seu nome?")
// const suaIdade = Number(prompt("Qual é a sua idade?"))
// const qualSuaCidade = prompt("Qual é a sua cidade")
// const qualSuaProfissao = prompt("Qual a sua profissão?")

// function fraseSobreUser(nome, idade, cidade, profissao){
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
// }
// fraseSobreUser(seuNome, suaIdade, qualSuaCidade, qualSuaProfissao) //posso só alterar os valores manualmente tbm

//2
//a.
// const somar = (a, b) => a + b

// console.log(somar(2,3))

//b.
// const booleano = (a, b) => a >= b

// console.log(booleano(2, 3))

// //c.
// function parOuNao (a){
//     let parOuNao = a % 2 === 0

//     return parOuNao
// }
// console.log(parOuNao(2))

//d.
// function stringTamanhoMaiuscula () {

//     const fraseNova = prompt("Diga uma frase").toUpperCase()
//     const tamanhoString = fraseNova.length

//     return [fraseNova, tamanhoString]
// }
// console.log(stringTamanhoMaiuscula())

//----Questão 3-----

// const somar = (a, b) => a + b
// const diferenca = (a,b) => a - b
// const multiplicação = (a,b) => a * b 
// const divisão = (a, b) => a / b

// const numero1 = Number(prompt("Insira um número"))
// const numero2 = Number(prompt("Insira outro número"))

// console.log(`Números inseridos: ${numero1} e ${numero2}
// Soma: ${somar(numero1, numero2)}
// Diferença: ${diferenca(numero1,numero2)}
// Multiplicação: ${multiplicação(numero1, numero2)}
// Divisão: ${divisão(numero1,numero2)}`)

//-------------DESAFIO--------------
//1.a) Escreva uma arrow function que recebe um parâmetro e imprime no console esse parâmetro
 

// const imprimeValor = valor => {
//      return valor
//  }
// console.log(imprimeValor(4)) //deu certo

// //b) Escreva outra arrow function que recebe dois valores como parâmetros mas nenhum retorno.
//  //Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma 
//  //como entrada para imprimi-lo

 
//  const soma = (a,b) => a + b
 
// console.log(Number(imprimeValor(soma (11,7)))) // rolou


//2
//  function pitagoras (a, b){
//      let hip = Math.sqrt((a**2) + (b**2))
//      return hip
//  }
// console.log(pitagoras(10,20))  //DEU CERTO IHUUU