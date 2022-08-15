enum Setor {
  MARKETING = "marketing",
  VENDAS = "vendas",
  FINANCEIRO = "financeiro",
}

type Pessoas = {
  nome: string;
  salario: number;
  setor: Setor;
  presencial: boolean;
};

const colaboradores: Pessoas[] = [
  { nome: "Marcos", salario: 2500, setor: Setor.MARKETING, presencial: true },
  { nome: "Maria", salario: 1500, setor: Setor.VENDAS, presencial: false },
  { nome: "Salete", salario: 2200, setor: Setor.FINANCEIRO, presencial: true },
  { nome: "João", salario: 2800, setor: Setor.MARKETING, presencial: false },
  { nome: "Josué", salario: 5500, setor: Setor.FINANCEIRO, presencial: true },
  { nome: "Natalia", salario: 4700, setor: Setor.VENDAS, presencial: true },
  { nome: "Paola", salario: 3500, setor: Setor.MARKETING, presencial: true },
];

const retornaPessoa = (pessoa: Pessoas[]): Pessoas[] => {
  const arrayFiltrada = pessoa.filter((item) => {
    if (item.setor === "marketing" && item.presencial === true) {
      return item;
    }
  });
  return arrayFiltrada;
};
console.log(retornaPessoa(colaboradores));
