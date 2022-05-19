// EXERCICIOS DE ESCRITA DE CÓDIGO

//1 irá imprimir no console cada item da array, seu indice e a array (3x)

//2 irá retornar o nome de cada objeto em uma array

//3 irá retornar uma array com os objetos, menos o que tem chijo como apelido


//---EXERCICIOS DE ESCRITA DE CÓDIGO-----

//1.

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

 //a. apenas nome dos doguinho
//  const apenasNomeDoguinho = pets.map( (item) => {
//      return item.nome
//  })

//  console.log(apenasNomeDoguinho) 

 //b. array só com cachorro salsicha

//  const apenasSalsichas = pets.filter( (doguinhos) =>{
//      return doguinhos.raca === 'Salsicha'
//  })
//  console.log(apenasSalsichas)

 //c. mensagem para donos de poodle

//  const mensagemPoodle = pets.filter((doguinho) =>{
//            return doguinho.raca === "Poodle"
//            }).map((doguinho) =>{
// return `Você ganhou um cupom de desconto de 10% para tosar o/a ${doguinho.nome} `})  
           
//  console.log(mensagemPoodle)

 //2

 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a.
//  const apenasNome = produtos.map((nome) => {
//      return nome.nome
//  })

//  console.log(apenasNome)

 //b.

 const arrayComDesconto = produtos.map((itens) =>{
     return {nome: itens.nome, preço: (itens.preco*0.95).toFixed(2)}
 })
 console.log(arrayComDesconto)



 //c
//  const bebida = produtos.filter((produto)=>{
//      return produto.categoria === 'Bebidas'
//  })
//  console.log(bebida)

 //d
//  const  contemYpe = produtos.filter((item)=>{
//      if(item.nome.includes("Ypê")){
//          return produtos
//      }
//  })
// console.log(contemYpe)

//e 

// const  arrayYpe = produtos.filter((item)=>{
//     if(item.nome.includes("Ypê")){
//         return produtos
//     }
// }).map((item) =>{
//     return ` Compre ${item.nome} por ${item.preco}`
// })
// console.log(arrayYpe)