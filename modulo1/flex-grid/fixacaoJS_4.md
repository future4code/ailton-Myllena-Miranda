```javascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let repeticao = []
  for(numero of arrayDeNumeros){
    if(numero === numeroEscolhido)
     repeticao.push(numero)
  }
    if(repeticao.length > 0){
      return `O número ${numeroEscolhido} aparece ${repeticao.length}x`
    }else{
      return "Número não encontrado"
    }
  }