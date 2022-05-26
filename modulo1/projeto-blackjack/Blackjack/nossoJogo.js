/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    

     
       
      

       function vamosJogar () {
      
         console.log("Boas vindas ao jogo de Blackjack")
      const jogar = confirm("Quer iniciar uma nova rodada?")


          const primeiraCarta = comprarCarta()
          const segundaCarta = comprarCarta()
          const terceiraCarta = comprarCarta()
          const quartaCarta = comprarCarta()

          const primeiroScore = primeiraCarta.valor + segundaCarta.valor
          const segundoScore = terceiraCarta.valor + quartaCarta.valor

         const jogador = (primeira, segunda) =>{
            return `User - cartas: ${primeira.texto} ${segunda.texto} - pontuação ${primeira.valor + segunda.valor}`
         }
         const computador = (primeira, segunda) =>{
            return `Computador - cartas ${primeira.texto} ${segunda.texto} - pontuação ${primeira.valor + segunda.valor} `
         }

       if(jogar !== true){
          console.log("O jogo acabou")
         
         } else if (jogar){
            console.log(`${jogador(primeiraCarta, segundaCarta)}
${computador(terceiraCarta, quartaCarta)}`)
            if(primeiroScore > segundoScore){
               console.log(`O user é o ganhador! :)`)
            } else if (segundoScore > primeiroScore){
               console.log(`O computador ganhou! :( `)
            } else if (primeiroScore === segundoScore){
               console.log("Empate!!")
            } else{
               console.log("Tu fez alguma cagada no código")
            }
         }
      }
      vamosJogar()