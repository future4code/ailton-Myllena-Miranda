// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
// function soma(num1, num2) {
//   // implemente sua lógica aqui
//   return num1 + num2
// }
// soma(1,2)
// // EXERCÍCIO 0B
// function imprimeMensagem() {
//   // implemente sua lógica aqui
//   const mensagem = prompt('Digite uma mensagem!')

//   console.log(mensagem)
// }
// imprimeMensagem("Olá mundo")
// // EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
// function calculaAreaRetangulo(altura,largura) {
//   // implemente sua lógica aqui
//       altura = Number(prompt("Informe a altura do seu Retângulo"))
//      largura = Number(prompt("Informe a largura do seu Retângulo"))
//   let area = altura * largura 
//   console.log(area)
//  return area
// }
// calculaAreaRetangulo()



// EXERCÍCIO 02
// function imprimeIdade() {
//   // implemente sua lógica aqui
// const anoAtual = Number(prompt("Em que ano estamos?"))
// const anoNascimento = Number(prompt("Qual é o seu ano de nascimento?"))
// let idade = anoAtual - anoNascimento
// console.log(idade)
// return idade
// 


// EXERCÍCIO 03
// function calculaIMC(peso, altura) {
//   // implemente sua lógica aqui
//   peso = Number(prompt('Quantos kg você pesa?'))
//   altura = Number(prompt("Qual é a sua altura?"))
//   let calculo = peso / (altura * altura)
//   console.log(calculo)
//   return calculo
// // }

// calculaIMC()


// EXERCÍCIO 04
// function imprimeInformacoesUsuario() {
//   // implemente sua lógica aqui
//   // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
//   const seuNome = prompt("Qual é o seu nome?")
//   const suaIdade = Number(prompt("Qual é a sua idade?"))
//   const qualSeuEmail = prompt("Qual é o seu e-mail?")
//   console.log(`Meu nome é ${seuNome}, tenho ${suaIdade} anos, e o meu email é ${qualSeuEmail}.`)
//   return console.log
// }
// imprimeInformacoesUsuario()

// EXERCÍCIO 05
// function imprimeTresCoresFavoritas() {
//   // implemente sua lógica aqui
          
//   const  cor1 = prompt(`Você terá que informar 3 cores que gosta:
//   Diga uma cor que você gosta:`)
//   const cor2 = prompt("Diga outra cor:")
//   const cor3 = prompt("Diga uma última cor")
  
//   return console.log([cor1, cor2, cor3])
  
// }
// imprimeTresCoresFavoritas()

// EXERCÍCIO 06
// function retornaStringEmMaiuscula(string) {
//   // implemente sua lógica aqui
// return string.toUpperCase()
// }
// retornaStringEmMaiuscula()

// // EXERCÍCIO 07
// function calculaIngressosEspetaculo(custo, valorIngresso) {
//   // implemente sua lógica aqui
// let venda = custo / valorIngresso

// return venda
// }
// calculaIngressosEspetaculo()

// // EXERCÍCIO 08
// function checaStringsMesmoTamanho(string1, string2) {
//   // implemente sua lógica aqui
// let booleano = string1.length === string2.length

// return booleano
// }
// checaStringsMesmoTamanho
// // EXERCÍCIO 09
// function retornaPrimeiroElemento(array) {
//   // implemente sua lógica aqui
// return array[0]
// }
// retornaPrimeiroElemento()

// // EXERCÍCIO 10
// function retornaUltimoElemento(array) {
//   // implemente sua lógica aqui
//   let comprimento = array.length
//   let ultimoArray = comprimento - 1
//   let utimoElement = array[ultimoArray]
//   return  utimoElement
// }
// retornaUltimoElemento()

// // EXERCÍCIO 11
// function trocaPrimeiroEUltimo(array) {
//   // implemente sua lógica aqui
//   const armazenaPrimeiro = array[0]
//   let ultimoElemnto = array.length-1
//   array[0] = array[ultimoElemnto]
//   array[ultimoElemnto] = armazenaPrimeiro
//   return array
// }
// trocaPrimeiroEUltimo()

// // EXERCÍCIO 12
// function checaIgualdadeDesconsiderandoCase(string1, string2) {
//   // implemente sua lógica aqui
//    return string1.toLowerCase().includes(string2.toLowerCase()) 

// }
// checaIgualdadeDesconsiderandoCase()

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt(`Você precisa renovar a sua carteira?
Informe o ano atual:`))
const anoNascimento = Number(prompt("Informe seu ano de nascimento:"))
const anoEmissaoCarteira = Number(prompt("Qual foi o ano de emissão da sua carteira de identidade?"))
let simOuNaoRenovacao = (anoAtual - anoNascimento) <= 20 && (anoAtual - anoEmissaoCarteira) >= 5 || (anoAtual- anoNascimento) > 20 && 
(anoAtual- anoNascimento)<= 50 && (anoAtual - anoEmissaoCarteira) >=  10 || (anoAtual- anoNascimento) > 50 && (anoAtual - anoEmissaoCarteira) >= 15

return console.log(simOuNaoRenovacao)
}
checaRenovacaoRG()

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
let anoBissexto1 = ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0 

return anoBissexto1
}
checaAnoBissexto()

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
const idade = prompt(`Responda as perguntas utilizando 'sim' ou 'não'
Você tem mais de 18 anos`)
const ensinoMedio = prompt("Você possui ensino médio completo?")
const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
let validade = idade.includes("sim") && ensinoMedio.includes("sim") && disponibilidade.includes("sim")

return console.log(validade)
}
checaValidadeInscricaoLabenu()