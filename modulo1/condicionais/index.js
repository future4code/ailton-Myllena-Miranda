//--------CONDICIONAIS---------------

//----Exercícios de Interpretação de código

//----1---a) o teste imprime um "passou no teste" se eo número que o usuário digitou for par (true),
// e "não passou no teste" caso contrário
//b) números divisiveis por dois (pares)
//c) para números não divisiveis por dois (impares)

//---2-a) para informar o valor de uma fruta apontada pelo usuário
//b) O preço da fruta Maçã é R$ 2.25
//c) O preço da fruta Pêra é R$ 5

//---3--a) a primeira linha está declarando uma variáveç que recebe um valor númerico informado pelo usuário
//b) "Esse número passou no teste" com o -10 aparecerá que a mensagem é undefined
//c) no console vai aparecer que a mensagem é undefined, só o console.log do if vai aparecer o último será underfined


//----------------EXERCÍCIOS DE ESCRITA DE CÓDIGO---------- 

//---1---

// const qual_idade = Number(prompt("Digite a sua idade"))

// function podeDirigir (idade){
//     if(idade >= 18){
//         return `Você pode dirigir`
//     } else {
//         return `Você não pode dirigir`
//     }
// }
// console.log(podeDirigir(qual_idade))

//-----2----

// function que_turno_estuda () {
//     const turno = prompt(`Informe em qual turno você estuda.
//     Digite M (matutino), V (vespertino) ou N (noturno)`)
//     if(turno === "M"){
//         return `Bom dia!`
//     } else if (turno === "V"){
//         return `Boa tarde!`
//     } else {
//         return `Boa noite!`
//     }
// }
// console.log(que_turno_estuda())

//-----3------

// function turnoQueEstuda (){
//     const turno = prompt(`Informe em qual turno você estuda.
//     Digite M (matutino), V (vespertino) ou N (noturno)`)
//     switch (turno) {
//         case `M`:
//           return "Bom dia! "
//         case 'V':
//           return "Boa tarde!"
//         case "N":
//           return "Boa Noite!"
//         default:
//             return `você digitou errado, tente novamente`
//     }
// }
// console.log(turnoQueEstuda())

//--------4 

// function vou_ao_filme (){
//     const informacoes ={
//         tipoFilme: prompt("Qual é o gênero do filme que iremos assistir?"),
//         preco: Number(prompt("Qual é o valor do ingresso?"))
//     } 
//      if (informacoes.tipoFilme.toLocaleLowerCase() === "fantasia" && informacoes.preco < 15) {
//         return console.log("Bom filme!:)")
//     } else {
//         return console.log("Escolha outro filme :(")
//     }
// }
// vou_ao_filme()

//-----DESAFIOS------
//1 modificação da anterior
// function vou_ao_filme (){
//     const informacoes ={
//         tipoFilme: prompt("Qual é o gênero do filme que iremos assistir?"),
//         preco: Number(prompt("Qual é o valor do ingresso?"))
//     } 
//      if (informacoes.tipoFilme.toLocaleLowerCase() === "fantasia" && informacoes.preco < 15) {
//         const lanchinho = prompt("Qual lanchinho você vai comprar?")
//         return console.log(`Bom filme!:)
//  Aproveite o seu ${lanchinho}!`)
//     } else {
//         return console.log("Escolha outro filme :(")
//     }
// }
// vou_ao_filme()

//2

function sistema_de_vendas() {
    const infoUser ={
        nomeCompleto : prompt("Informe seu nome completo"),
        tipoJogo : prompt("Informe se seu jogo será IN (internacional) ou DO (doméstico)"),
        etapaJogo: prompt(`Informe a Etapa do Jogo
SF (semi-final),   DT(decisão de terceiro lugar) ou FI(final)`),
        categoria: Number(prompt("Informe a categoria do jogo. 1, 2, 3 ou 4 ")),
        quantidade: Number(prompt("Informe a quantidade de ingressos que irá comprar.")) 
    }
    if(infoUser.tipoJogo === "IN" && infoUser.etapaJogo === "SF" && infoUser.categoria === 1){
        const valorIngressoDol = 1320 * 4.10
        const ingressos = infoUser.quantidade * valorIngressoDol 
        return console.log(`---Dados da compra---
Nome do cliente: ${infoUser.nomeCompleto}
Tipo de Jogo: ${infoUser.tipoJogo}
Etapa do jogo: ${infoUser.etapaJogo}
Categoria: ${infoUser.categoria}
Quantidade de ingressos: ${infoUser.quantidade}
---Valores---
Valor do Ingresso: R$${valorIngressoDol}
Valor total: R$${ingressos}`)
    } else if(infoUser.tipoJogo === "IN" && infoUser.etapaJogo === "SF" && infoUser.categoria === 2){
        const valorIngressoDol = 880 * 4.10
        const ingressos = infoUser.quantidade * valorIngressoDol 
        return console.log(`---Dados da compra---
Nome do cliente: ${infoUser.nomeCompleto}
Tipo de Jogo: ${infoUser.tipoJogo}
Etapa do jogo: ${infoUser.etapaJogo}
Categoria: ${infoUser.categoria}
Quantidade de ingressos: ${infoUser.quantidade}
---Valores---
Valor do Ingresso: R$${valorIngressoDol}
Valor total: R$${ingressos}`)
    } else if(infoUser.tipoJogo === "IN" && infoUser.etapaJogo === "SF" && infoUser.categoria === 3) {
        const valorIngressoDol = 550 * 4.10
        const ingressos = infoUser.quantidade * valorIngressoDol
        return console.log(`---Dados da compra---
Nome do cliente: ${infoUser.nomeCompleto}
Tipo de Jogo: ${infoUser.tipoJogo}
Etapa do jogo: ${infoUser.etapaJogo}
Categoria: ${infoUser.categoria}
Quantidade de ingressos: ${infoUser.quantidade}
---Valores---
Valor do Ingresso: R$${valorIngressoDol}
Valor total: R$${ingressos}`)
 } else if(infoUser.tipoJogo === "IN" && infoUser.etapaJogo === "SF" && infoUser.categoria === 4){
    const valorIngressoDol = 220 * 4.10
        const ingressos = infoUser.quantidade * valorIngressoDol
        return console.log(`---Dados da compra---
Nome do cliente: ${infoUser.nomeCompleto}
Tipo de Jogo: ${infoUser.tipoJogo}
Etapa do jogo: ${infoUser.etapaJogo}
Categoria: ${infoUser.categoria}
Quantidade de ingressos: ${infoUser.quantidade}
---Valores---
Valor do Ingresso: R$${valorIngressoDol}
Valor total: R$${ingressos}`)   
 } else if (infoUser.tipoJogo === "IN" && infoUser.etapaJogo === "DT" && infoUser.categoria === 1){
    const valorIngressoDol = 660 * 4.10
    const ingressos = infoUser.quantidade * valorIngressoDol
    return console.log(`---Dados da compra---
Nome do cliente: ${infoUser.nomeCompleto}
Tipo de Jogo: ${infoUser.tipoJogo}
Etapa do jogo: ${infoUser.etapaJogo}
Categoria: ${infoUser.categoria}
Quantidade de ingressos: ${infoUser.quantidade}
---Valores---
Valor do Ingresso: R$${valorIngressoDol}
Valor total: R$${ingressos}`)
 } else if (infoUser.tipoJogo === "IN" && infoUser.etapaJogo === "DT" && infoUser.categoria === 2){
    const valorIngressoDol = 440 * 4.10
    const ingressos = infoUser.quantidade * valorIngressoDol
    return console.log(`---Dados da compra---
Nome do cliente: ${infoUser.nomeCompleto}
Tipo de Jogo: ${infoUser.tipoJogo}
Etapa do jogo: ${infoUser.etapaJogo}
Categoria: ${infoUser.categoria}
Quantidade de ingressos: ${infoUser.quantidade}
---Valores---
Valor do Ingresso: R$${valorIngressoDol}
Valor total: R$${ingressos}`)
 } else if(infoUser.tipoJogo === "IN" && infoUser.etapaJogo === "DT" && infoUser.categoria === 3){
    const valorIngressoDol = 330 * 4.10
    const ingressos = infoUser.quantidade * valorIngressoDol
    return console.log(`---Dados da compra---
Nome do cliente: ${infoUser.nomeCompleto}
Tipo de Jogo: ${infoUser.tipoJogo}
Etapa do jogo: ${infoUser.etapaJogo}
Categoria: ${infoUser.categoria}
Quantidade de ingressos: ${infoUser.quantidade}
---Valores---
Valor do Ingresso: R$${valorIngressoDol}
Valor total: R$${ingressos}`)
 } else if (infoUser.tipoJogo === "IN" && infoUser.etapaJogo === "DT" && infoUser.categoria === 4){
    const valorIngressoDol = 170 * 4.10
    const ingressos = infoUser.quantidade * valorIngressoDol
    return console.log(`---Dados da compra---
Nome do cliente: ${infoUser.nomeCompleto}
Tipo de Jogo: ${infoUser.tipoJogo}
Etapa do jogo: ${infoUser.etapaJogo}
Categoria: ${infoUser.categoria}
Quantidade de ingressos: ${infoUser.quantidade}
---Valores---
Valor do Ingresso: R$${valorIngressoDol}
Valor total: R$${ingressos}`)  
 } else if (infoUser.tipoJogo === "IN" && infoUser.etapaJogo === "FI" && infoUser.categoria === 1){
    const valorIngressoDol = 1980 * 4.10
    const ingressos = infoUser.quantidade * valorIngressoDol
    return console.log(`---Dados da compra---
Nome do cliente: ${infoUser.nomeCompleto}
Tipo de Jogo: ${infoUser.tipoJogo}
Etapa do jogo: ${infoUser.etapaJogo}
Categoria: ${infoUser.categoria}
Quantidade de ingressos: ${infoUser.quantidade}
---Valores---
Valor do Ingresso: R$${valorIngressoDol}
Valor total: R$${ingressos}`) 
 } else if (infoUser.tipoJogo === "IN" && infoUser.etapaJogo === "FI" && infoUser.categoria === 2){
    const valorIngressoDol = 1320 * 4.10
    const ingressos = infoUser.quantidade * valorIngressoDol
    return console.log(`---Dados da compra---
Nome do cliente: ${infoUser.nomeCompleto}
Tipo de Jogo: ${infoUser.tipoJogo}
Etapa do jogo: ${infoUser.etapaJogo}
Categoria: ${infoUser.categoria}
Quantidade de ingressos: ${infoUser.quantidade}
---Valores---
Valor do Ingresso: R$${valorIngressoDol}
Valor total: R$${ingressos}`) 
 } else if(infoUser.tipoJogo === "IN" && infoUser.etapaJogo === "FI" && infoUser.categoria === 3){
    const valorIngressoDol = 880 * 4.10
    const ingressos = infoUser.quantidade * valorIngressoDol
    return console.log(`---Dados da compra---
Nome do cliente: ${infoUser.nomeCompleto}
Tipo de Jogo: ${infoUser.tipoJogo}
Etapa do jogo: ${infoUser.etapaJogo}
Categoria: ${infoUser.categoria}
Quantidade de ingressos: ${infoUser.quantidade}
---Valores---
Valor do Ingresso: R$${valorIngressoDol}
Valor total: R$${ingressos}`) 
} else if(infoUser.tipoJogo === "IN" && infoUser.etapaJogo === "FI" && infoUser.categoria === 4){
    const valorIngressoDol = 330 * 4.10
    const ingressos = infoUser.quantidade * valorIngressoDol
    return console.log(`---Dados da compra---
Nome do cliente: ${infoUser.nomeCompleto}
Tipo de Jogo: ${infoUser.tipoJogo}
Etapa do jogo: ${infoUser.etapaJogo}
Categoria: ${infoUser.categoria}
Quantidade de ingressos: ${infoUser.quantidade}
---Valores---
Valor do Ingresso: R$${valorIngressoDol}
Valor total: R$${ingressos}`) 
} else if(infoUser.tipoJogo === "DO" && infoUser.etapaJogo === "SF" && infoUser.categoria === 1){
    const ingressos = infoUser.quantidade * 1320
    return console.log(`---Dados da compra---
Nome do cliente: ${infoUser.nomeCompleto}
Tipo de Jogo: ${infoUser.tipoJogo}
Etapa do jogo: ${infoUser.etapaJogo}
Categoria: ${infoUser.categoria}
Quantidade de ingressos: ${infoUser.quantidade}
---Valores---
Valor do Ingresso: R$${valorIngressoDol}
Valor total: R$${ingressos}`) 
} else if(infoUser.tipoJogo === "DO" && infoUser.etapaJogo === "SF" && infoUser.categoria === 2){
    const ingressos = infoUser.quantidade * 880
    return console.log(`---Dados da compra---
Nome do cliente: ${infoUser.nomeCompleto}
Tipo de Jogo: ${infoUser.tipoJogo}
Etapa do jogo: ${infoUser.etapaJogo}
Categoria: ${infoUser.categoria}
Quantidade de ingressos: ${infoUser.quantidade}
---Valores---
Valor do Ingresso: R$${valorIngressoDol}
Valor total: R$${ingressos}`) 
}else if(infoUser.tipoJogo === "DO" && infoUser.etapaJogo === "SF" && infoUser.categoria === 3){
    const ingressos = infoUser.quantidade * 550
    return console.log(`---Dados da compra---
Nome do cliente: ${infoUser.nomeCompleto}
Tipo de Jogo: ${infoUser.tipoJogo}
Etapa do jogo: ${infoUser.etapaJogo}
Categoria: ${infoUser.categoria}
Quantidade de ingressos: ${infoUser.quantidade}
---Valores---
Valor do Ingresso: R$${valorIngressoDol}
Valor total: R$${ingressos}`) 
} else if(infoUser.tipoJogo === "DO" && infoUser.etapaJogo === "SF" && infoUser.categoria === 4){
    const ingressos = infoUser.quantidade * 220
    return console.log(`---Dados da compra---
Nome do cliente: ${infoUser.nomeCompleto}
Tipo de Jogo: ${infoUser.tipoJogo}
Etapa do jogo: ${infoUser.etapaJogo}
Categoria: ${infoUser.categoria}
Quantidade de ingressos: ${infoUser.quantidade}
---Valores---
Valor do Ingresso: R$${valorIngressoDol}
Valor total: R$${ingressos}`) 
} else if(infoUser.tipoJogo === "DO" && infoUser.etapaJogo === "DT" && infoUser.categoria === 1){
    const ingressos = infoUser.quantidade * 660
    return console.log(`---Dados da compra---
Nome do cliente: ${infoUser.nomeCompleto}
Tipo de Jogo: ${infoUser.tipoJogo}
Etapa do jogo: ${infoUser.etapaJogo}
Categoria: ${infoUser.categoria}
Quantidade de ingressos: ${infoUser.quantidade}
---Valores---
Valor do Ingresso: R$${valorIngressoDol}
Valor total: R$${ingressos}`) 
}else if(infoUser.tipoJogo === "DO" && infoUser.etapaJogo === "DT" && infoUser.categoria === 2){
    const ingressos = infoUser.quantidade * 440
    return console.log(`---Dados da compra---
Nome do cliente: ${infoUser.nomeCompleto}
Tipo de Jogo: ${infoUser.tipoJogo}
Etapa do jogo: ${infoUser.etapaJogo}
Categoria: ${infoUser.categoria}
Quantidade de ingressos: ${infoUser.quantidade}
---Valores---
Valor do Ingresso: R$${valorIngressoDol}
Valor total: R$${ingressos}`) 
}else if(infoUser.tipoJogo === "DO" && infoUser.etapaJogo === "DT" && infoUser.categoria === 3){
    const ingressos = infoUser.quantidade * 330
    return console.log(`---Dados da compra---
Nome do cliente: ${infoUser.nomeCompleto}
Tipo de Jogo: ${infoUser.tipoJogo}
Etapa do jogo: ${infoUser.etapaJogo}
Categoria: ${infoUser.categoria}
Quantidade de ingressos: ${infoUser.quantidade}
---Valores---
Valor do Ingresso: R$${valorIngressoDol}
Valor total: R$${ingressos}`) 
} else if(infoUser.tipoJogo === "DO" && infoUser.etapaJogo === "DT" && infoUser.categoria === 4){
    const ingressos = infoUser.quantidade * 170
    return console.log(`---Dados da compra---
Nome do cliente: ${infoUser.nomeCompleto}
Tipo de Jogo: ${infoUser.tipoJogo}
Etapa do jogo: ${infoUser.etapaJogo}
Categoria: ${infoUser.categoria}
Quantidade de ingressos: ${infoUser.quantidade}
---Valores---
Valor do Ingresso: R$${valorIngressoDol}
Valor total: R$${ingressos}`) 
}else if(infoUser.tipoJogo === "DO" && infoUser.etapaJogo === "FI" && infoUser.categoria === 1){
    const ingressos = infoUser.quantidade * 1980
    return console.log(`---Dados da compra---
Nome do cliente: ${infoUser.nomeCompleto}
Tipo de Jogo: ${infoUser.tipoJogo}
Etapa do jogo: ${infoUser.etapaJogo}
Categoria: ${infoUser.categoria}
Quantidade de ingressos: ${infoUser.quantidade}
---Valores---
Valor do Ingresso: R$${valorIngressoDol}
Valor total: R$${ingressos}`) 
} else if(infoUser.tipoJogo === "DO" && infoUser.etapaJogo === "FI" && infoUser.categoria === 2){
    const ingressos = infoUser.quantidade * 1320
    return console.log(`---Dados da compra---
Nome do cliente: ${infoUser.nomeCompleto}
Tipo de Jogo: ${infoUser.tipoJogo}
Etapa do jogo: ${infoUser.etapaJogo}
Categoria: ${infoUser.categoria}
Quantidade de ingressos: ${infoUser.quantidade}
---Valores---
Valor do Ingresso: R$${valorIngressoDol}
Valor total: R$${ingressos}`) 
}else if(infoUser.tipoJogo === "DO" && infoUser.etapaJogo === "FI" && infoUser.categoria === 3){
    const ingressos = infoUser.quantidade * 880
    return console.log(`---Dados da compra---
Nome do cliente: ${infoUser.nomeCompleto}
Tipo de Jogo: ${infoUser.tipoJogo}
Etapa do jogo: ${infoUser.etapaJogo}
Categoria: ${infoUser.categoria}
Quantidade de ingressos: ${infoUser.quantidade}
---Valores---
Valor do Ingresso: R$${valorIngressoDol}
Valor total: R$${ingressos}`) 
}else if(infoUser.tipoJogo === "DO" && infoUser.etapaJogo === "FI" && infoUser.categoria === 4){
    const ingressos = infoUser.quantidade * 330
    return console.log(`---Dados da compra---
Nome do cliente: ${infoUser.nomeCompleto}
Tipo de Jogo: ${infoUser.tipoJogo}
Etapa do jogo: ${infoUser.etapaJogo}
Categoria: ${infoUser.categoria}
Quantidade de ingressos: ${infoUser.quantidade}
---Valores---
Valor do Ingresso: R$${valorIngressoDol}
Valor total: R$${ingressos}`) 
} else{
    return console.log("Tu digitou algo errado, anta.")
}
}
sistema_de_vendas()