// ------LOOPS----LAÇOS----

//------Exercícios de interpretação de código

//1.o código atribuiu um loop que para quando o contador chega a 5
// o valor é uma variável com o valor 0, que guarda os valores do contador (somando)

//2. A) os números maiores que 18 serão impressos no console
//b) não consigo pensar em uma forma de realizar isso, li em um 
// fórum que usando o for if junto com o keys() resolveria
//ou talvez declarano uma variavel com uma array vazia que recebe os valores
//do for of
// 3,const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
//3. *
//   **
//  ***
//  ****

//-----ESCRITA DE CÓDIGO-------

//1.
// let bichinhoUser = Number(prompt("Quantos bichinhos de estimação você tem?"))

// function seuBichinho (numero) {
//    const arrayBichinho = []
//         if (numero === 0) {
//           console.log("Que pena! Você pode adotar um pet.") 
//        } else {
//         for(let i = 0; i < numero; i++) {
//           arrayBichinho.push(prompt("Diga o nome dos seus bichinhos(um de cada vez)")) 
//         }
//         console.log(arrayBichinho)
//       } 
//     }
//    seuBichinho(bichinhoUser)

   //2.
//a.
   let arrayOriginal = [12, 4, 8, 28, 14, 97, 100]

  //  function imprimeValor (array){
  //    for(let numero of array)
  //    console.log(numero)
  //  }
  //     imprimeValor(arrayOriginal)

 //b.
    
  //   function imprimeValorDividido (array){
  //     for(let numero of array){
  //       divisao = numero / 10
  //    console.log(divisao)
  //   }
  // }
  //      imprimeValorDividido(arrayOriginal)
  
  //c.

  // function somentePar(array){
  //   let arrayPar = []
  //   for(let numero of array){
  //     if(numero % 2 === 0){
  //       arrayPar.push(numero)
  //     }
  //   }
  //   console.log(arrayPar)
  // }
  // somentePar(arrayOriginal)

  //d.

  // function criaArrayString(array){
  //   let vazia = []

  //   for(let i = 0; i < array.length; i++){
  //     const indice = i
  //     const elemento = array[i]
  //     vazia.push(`O elemento do índex ${indice} é: ${elemento}`)
  //   }
  //   console.log(vazia)
  // }
  // criaArrayString(arrayOriginal)

  //e.

  function menorEMaior (array){
    let maior = 0
    let menor = 1500

    for(let i = 0; i <array.length; i++ ){
      const armazenaElemento = array[i]
      if(armazenaElemento > maior){
        maior = armazenaElemento
      }else if (armazenaElemento < menor){
        menor = armazenaElemento
      }
    }
    console.log(`O valor maior é: ${maior}
O valor menor é: ${menor}`)
  }
   menorEMaior(arrayOriginal)