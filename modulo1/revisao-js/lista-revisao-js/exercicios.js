// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length 
   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort(function(a, b){
        return a - b
    })
  return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let novaArray = []
  for(numero of array){
      if(numero % 2 === 0){
     novaArray.push(numero)
      }
 }
 return novaArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let novaArray = []
    for(numero of array){
        if(numero % 2 === 0){
            numero = numero**2
       novaArray.push(numero)
        }
  }
   return novaArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = -Infinity
    for(numero of array){
        if(numero > maior){
            maior = numero
        }
    }
    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let maior
let menor
if(num1 > num2){
     maior = num1
     menor = num2
} else{
    maior = num2
    menor = num1
}
let divisivelMenor
if(maior % menor === 0){
    divisivelMenor = true
}else {
    divisivelMenor = false
}
  let diferenca1 = maior - menor 

  return{maiorNumero:maior, maiorDivisivelPorMenor:divisivelMenor, diferenca:diferenca1} 
}


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let pares = [];
   for(let i = 0; pares.length < n; i++){
       if( i % 2 === 0){
           pares.push(i)
   }
  }
return pares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if( ladoA === ladoB && ladoB === ladoC){
        return "Equilátero"
    }else if(ladoA === ladoB && ladoA !== ladoC || ladoB === ladoC && ladoA || ladoA === ladoC && ladoA !== ladoB){
        return "Isósceles"
    }else if(ladoA !== ladoB && ladoB !== ladoC && ladoA != ladoC){
        return "Escaleno"
}
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let maior = - Infinity
    let menor = + Infinity
    let segundoMaior = -Infinity
    let segundoMenor = + Infinity

  for(let number of array){
      if(number > maior){
          maior = number
      } if(number < menor){
          menor = number
      } 
      }
    for (let number of array){
        if (number > segundoMaior && number !== maior){
            segundoMaior = number
        }if(number < segundoMenor && number !== menor){
            segundoMenor = number
        }
    }
       const resultado = [segundoMaior, segundoMenor]
       return resultado
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const atores = []
    for(let i = 0; i<filme.atores.length; i++){
       atores.push(` ${filme.atores[i]}`) 
    }
 return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atores}.`  
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
 const novaPessoa = {...pessoa,
nome: "ANÔNIMO"}
return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const autorizadas = []
 for (itens of pessoas){
     if(itens.idade > 14 && itens.idade < 60 && itens.altura >= 1.5){
         autorizadas.push(itens)
     }
 }
 return autorizadas
 }
   

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const naoAutorizadas= []
 const autorizadas = []
 for (itens of pessoas){
     if(itens.idade > 14 && itens.idade < 60 && itens.altura >= 1.5){
         autorizadas.push(itens)
     } else{
         naoAutorizadas.push(itens)
     }
 }
  return naoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let novoSaldo = contas.map((item) => {
        for (let compra of item.compras) {
            item.saldoTotal = item.saldoTotal - compra;
        }
        return {
            ...item,
            saldoTotal: item.saldoTotal,
            compras: []
        }
    })
    return novoSaldo;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort(function(item,indice){
        let a = item.nome.toUpperCase()
        b = indice.nome.toUpperCase()
        return a ==b? 0 : a > b ? 1 : -1
    })
  return consultas
}

// EXERCÍCIO 15B 
function retornaArrayOrdenadoPorData(consultas) {

}