
//------EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO-------

//1 a) Matheus Nachtergaele 
//Virginia Cavendish //o último elemento da array
// {canal: 'Globo', horario: '14h'}  object

//2 a) { nome: "Juca", idade: 3, raca: SRD}
//{nome:"Juba", idade:3, raca: SRD}
//{nome: "Jubo", idade:3, raca: SRD}

//3)a) false
//    undefined // o primeiro valor impresso foi chamado através da [] e não do ponto
//retornou o valor de backender já a chave "altura não está contida no objeto"


//--------EXERCÍCIOS DE ESCRITA DE CÓDIGO----------------
//Questão 1

// const pessoa ={
//     nome: "Myllena",
//     apelidos: ["My", "Mya","Lena"]
// }

// function imprimeMensagem(objeto) {
//     console.log(`Eu sou a ${objeto.nome}, mas pode me chamar de:
//     ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)

// }
// imprimeMensagem(pessoa)

// const alterPessoa = {
//     ... pessoa,
//     apelidos: ["lelê", "chata", "mymy"]
// }
// imprimeMensagem(alterPessoa)

//Questão 2

// const sobre_pessoa1 = {
//     nome: "Timothee",
//     idade: 27,
//     profissao: "Ator"
// } 

// const sobre_pessoa2 = {
//    nome: "Elon",
//    idade: 54,
//    profissao: "Empreendedor"
// }

// function retornaInfos(objeto) {
// return console.log([objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length])
// }
// retornaInfos(sobre_pessoa1)
// retornaInfos(sobre_pessoa2)

//Questão 3

let carrinho = []

 const fruta1 = {
     nome: "Abacaxi",
     disponibilidade: true
 }

 const fruta2 = {
     nome: "Morango",
     disponibilidade: true
 }
 const fruta3 = {
     nome: "Blueberry",
     disponibilidade: true
 }
 function recebaFruta (objeto){
  carrinho.push(objeto)
     
 }
 recebaFruta(fruta1)
 recebaFruta(fruta2)
 recebaFruta(fruta3)
// console.log(carrinho)
// console.log(carrinho[1])
// console.log(carrinho[2])
// console.log(carrinho[0])//elementos estão contidos na array

//---------DESAFIO-------

//Questão 1

// function perguntaUser() {
//     const perguntas = {
//     nome : prompt("Qual é o seu nome?"),
//     idade : Number(prompt("Qual é a sua idade?")),
//     profissao : prompt("Qual é a sua profissão?")   
// }
// return console.log(perguntas, typeof(perguntas)) 
// }
// perguntaUser()

//Questão 2

// const filme1 ={
//         nome: "Call me by your name",
//         dadosDireção: 'Luca Guadagnino',
//         ano_lancamento: 2018
//     }

// const filme2 = {
//     nome: "Howl's Moving Castle",
//     dadosDireção: "Hayao Miyazaki",
//     ano_lancamento: 2005
// }   

// function idadeFilme (object, object2) {
//     let primeiroMaiorSegundo = object.ano_lancamento < object2.ano_lancamento
//     let igual = object.ano_lancamento === object2.ano_lancamento
//     console.log(`O filme ${object.nome} foi lançado antes de ${object2.nome}?`, primeiroMaiorSegundo) 
//     console.log ( `O filme ${object.nome} foi lançado no mesmo ano de ${object2.nome}?`, igual) 
// }
// idadeFilme(filme1, filme2)

//Questão 3

function recebaFruta2 (objeto){
     objeto.disponibilidade = !objeto.disponibilidade
    return console.log(objeto)
}

recebaFruta2(fruta1)
recebaFruta2(fruta2)
recebaFruta2(fruta3)
console.log(carrinho)
    