enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}

type Filme = {
  nome: string;
  anoLancamento: number;
  genero: string;
  pontuacao?: number;
};

const filme = (
 filme:Filme
) => {
    return filme
};
console.table(filme({nome:"Call me by your name", anoLancamento:2017, genero:GENERO.DRAMA, pontuacao:10}))