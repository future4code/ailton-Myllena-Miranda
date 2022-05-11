// ---------EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO----------

// 1 - a.false  b.false c. true d.boolean

/*2 o console identifica os números informados no prompt como strings
o colega deve colocar Number() para transformar as strings em número e
assim realizar a soma desejada. O console irá imprimir uma concatenação
de string caso a string não seja transformada em número.
*/
/* 3. Adicionar Number()
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero
 console.log(soma) */


 //--------EXERCICIOS DE ESCRITA DE CODIGO-------------
 //EXERCICIO 1
 /*let idadeUsuario = Number(prompt("Qual é a sua idade"))
 let idadeAmiga = Number(prompt("Qual é a idade da sua melhor amiga"))

  let idadeMaior = idadeUsuario > idadeAmiga
  let diferenca = idadeUsuario - idadeAmiga
  //console.log("Sua idade é maior do que a da sua melhor amiga?", idadeMaior) //"Sua idade é melhor do que a da sua melhor amiga? false" eu tenho 24 minha amiga 25
  console.log(diferenca)//imprimiu -1 */

  //EXERCICIO 2

 /* let par = Number(prompt("Insira um número par"))
  let diferenca = par % 2
   
  console.log(diferenca) //com numeros pares o resto da divisão é 0, já com números impar sempre sobra 1
*/

//EXERCICIO 3

/*let idade = Number(prompt("Qual é a sua idade?"))

let meses = idade * 12
let dias = meses * 30
let horas = dias * 24

console.log(meses, dias, horas)*/

//EXERCICIO 4

/*let numero1 = Number(prompt("Diga um número"));
let numero2 = Number(prompt("Diga outro número"));

let maior = numero1 > numero2
let igual = numero1 === numero2
 
let resto = numero1 % numero2
let divisivel1 = resto === 0

let resto2 = numero2 % numero1
let divisivel2 = resto2 === 0

console.log("O primeiro numero é maior do que o segundo?", maior)
console.log("O primeiro numero é igual ao segundo numero?", igual)
console.log("O primeiro numero é divisivel pelo segundo?", divisivel1)
console.log("O segundo numero é divisivel pelo primeiro?", divisivel2)*/

//-----------DESAFIO--------

//EXERCICIO 1
//alteração de valores de graus celsiu para Kelvin e Fahrenheit
/* 
let K = (77 - 32)*(5/9) + 273.15 //77F to K 
console.log(K +"K") //298.15 K */

// //b
// let F = (80)*(9/5) + 32
// console.log(F +"°F")

//c
// let grauCelsius = 30
// let celsiusToFahr = (30)*(9/5) + 32
// let  fahrToKel = (celsiusToFahr-32)*(5/9) + 273.15

// console.log(celsiusToFahr + "°F")
// console.log(fahrToKel + "K")

//d - altere o último item para p usuário inserir o valor em °C
// let grauCelsius = Number(prompt("Insira uma temperatura em °C"))

// let celsiusToFahr = (grauCelsius)*(9/5) + 32
// let fahrToKel = (celsiusToFahr-32)*(5/9) + 273.15

// console.log(celsiusToFahr + "°F")
// console.log(fahrToKel + "K")

//EXERCICIO 2
//a
// let quilowattHora = 0.05
// let quilowattHoraConsumido = 280
// let valorParaPagar = quilowattHoraConsumido * quilowattHora  

// console.log(valorParaPagar) //14 reais

//b
// let quilowattHora = 0.05
// let quilowattHoraConsumido = 280
// let descontoPorcentagem = 15
// let valorParaPagar = quilowattHoraConsumido * quilowattHora
// let desconto = descontoPorcentagem / 100 * valorParaPagar
// let valorTotal = valorParaPagar - desconto 
// console.log(valorTotal) //11.9

// EXERCICIO 3
//a-
// let lb = 20
// let lbToKilo = lb / 2.2046
// console.log("20lb equivalem a", lbToKilo + "Kg")

//b - oz to kg

// let oz = 10.5
// let ozToKg = oz / 35.274

// console.log("10.5oz equivalem a", ozToKg + "kg")

// //c
// let milhas = 100
// let milhasToMetros = milhas / 0.00062137

// console.log("100mi equivalem a", milhasToMetros +"metros")

// //d

// let ft = 50
// let ftToMetro = ft / 3.2808

// console.log("50ft equivalem a", ftToMetro + "metros")

//e

// let galao = 103.56
// let galaoToLitro = galao / 0.26417

// console.log("103.56gal equivalem a", galaoToLitro + "L")

//f
//  let xicara = 450
//  let xicaraToLitros = xicara * 0.24

//  console.log("450 xic equivalem a", xicaraToLitros + "L")

//g

//  let xicara = Number(prompt("Digite a quantidade de xícaras que você gostaria de converter para litros:"))
//  let xicaraToLitros = xicara * 0.24

//  console.log( xicara, "xicaras equivalem a", xicaraToLitros + "L")