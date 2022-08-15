//a) Crie uma variável minhaString do tipo string e atribua um valor a ela.//
// Tente atribuir um número a esta variável. O que acontece?//
// const minhaString:string = 55
//Res:Type 'number' is not assignable to type 'string'//

//b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como fazer para que essa variável também aceite strings? //
//Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?//

// const meuNumero:string | number= "oi"
//c)//

const objeto: { nome: string; idade: number; corFavorita: string } = {
  nome: "Myllena",
  idade: 19,
  corFavorita: "preto",
};

type pessoa = {
  nome: string;
  idade: number;
  corFavorita: string;
};

const pessoa1: pessoa = {
  nome: "Xuliana",
  idade: 19,
  corFavorita: "rosa",
};

//d)//

enum CoresArcoIris {
  ROSA = "Rosa",
  AZUL = "azul",
  PRETO = "preto",
  ROXO = "roxo",
  LILAS = "lilás",
  VERMELHO = "vermelho",
}

const pessoa2: pessoa = {
    nome: "Xuliana",
    idade: 19,
    corFavorita: CoresArcoIris.ROSA,
  };

  console.table(pessoa2)